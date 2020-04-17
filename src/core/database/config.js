import SQLite  from 'react-native-sqlite-storage';
import DB_MIGRATIONS from "./migrations";

SQLite.enablePromise(true);

class DowngradeError extends Error {
    constructor() {
        super();
        this.name = 'DowngradeError';
    }
}

class Database {
    privateConnected = false;
    privateDb = null;

    constructor(name = "", migrations, debug) {
        this.name = name;
        this.migrations = migrations;
        if (debug === true) {
            SQLite.DEBUG(debug);
        }
    }

    get dB() {
        return this.privateDb;
    }

    async connect() {
        if (this.privateConnected) {
            return;
        }
        try {
            this.privateDb = await SQLite.openDatabase({ name: this.name, location: 'default' });

            // MIGRATIONS
            const resultSet = await this.privateDb.executeSql('PRAGMA user_version');
            const version = resultSet[0].rows.item(0).user_version;
            const nextVersion = this.migrations.length;
            if (version > nextVersion) {
                throw new DowngradeError();
            }

            for (let i = version; i < nextVersion; i += 1) {
                console.log(`Migrating database from currentVersion: ${version} to nextVersion: ${nextVersion}`)
                const migration = this.migrations[i];
                await migration(this.privateDb);
            }
            if (version !== nextVersion) {
                await this.privateDb.executeSql(`PRAGMA user_version = ${nextVersion}`);
            }

            this.privateConnected = true;
            return this.privateDb
        } catch (err) {
            if (err instanceof DowngradeError) {
                throw err;
            }
            throw new Error(`SQLiteClient: failed to connect to database: ${this.name}`);
        }
    }
}

const DB_NAME = 'leaderdb.db';
const DB_DEBUG = false;
const sqLiteClient = new Database(DB_NAME, DB_MIGRATIONS, DB_DEBUG);

let db = null

export default getDB = async () => {
    if(Object.is(db, null)){
        db = await sqLiteClient.connect();
    }
    return db
}
