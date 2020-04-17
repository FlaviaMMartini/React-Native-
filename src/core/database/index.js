import getDB from "./config";
import { object } from "prop-types";

const getDatabase = async _ => getDB()

const getAll = async (table) => {
    const db = await getDatabase()

    const resultList = []
    await db.transaction(async function (tx) {
        await tx.executeSql(`SELECT * FROM ${table};`, [],
            await function (tx, results) {
                if (results.rows && results.rows.length > 0) {
                    for (let i = 0; i < results.rows.length; i++) {
                        resultList.push(results.rows.item(i))
                    }
                }
            });
    })
    return resultList
}

const getWhere = async (table, column, id) => {
    const db = await getDatabase()

    const resultList = []
    await db.transaction(async function (tx) {
        await tx.executeSql(`SELECT * FROM ${table} WHERE ${column} = "${id}";`, [],
            await function (tx, results) {
                if (results.rows && results.rows.length > 0) {
                    for (let i = 0; i < results.rows.length; i++) {
                        resultList.push(results.rows.item(i))
                    }
                }
            });
    })
    return resultList
}

const replace = async (table, list) => {
    const db = await getDatabase()

    const results = list.map(
        element => {
            const keys = Object.keys(element)
            const values = `(${keys.map(() => "?").join(",")})`
            const keysWildcard = `(${keys.join(",")})`
            return db.executeSql(
                `REPLACE INTO ${table} ${keysWildcard} VALUES ${values};`,
                Object.values(element)
            )
        })
    return results.length;
}

const insert = async (object, table) => {
    const db = await getDatabase()

    const keys = Object.keys(object)
    const values = `(${keys.map(() => "?").join(",")})`
    const keysWildcard = `(${keys.join(",")})`

    return db.executeSql(
        `REPLACE INTO ${table} ${keysWildcard} VALUES ${values};`,
        Object.values(object)
    )
}

const remove = async (object, table) => {
    const db = await getDatabase()
    return db.executeSql(`DELETE FROM ${table} WHERE id = ?` , [ object.id ])
}

const database = {
    getAll,
    getWhere,
    replace,
    insert,
    remove
}

export default database
