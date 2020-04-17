const DB_MIGRATIONS = [
  async (dB) => {
    dB.executeSql(`
          CREATE TABLE IF NOT EXISTS Employee(
            id TEXT PRIMARY KEY NOT NULL,
            name TEXT,
            image TEXT,
            matricula TEXT
          );
        `);
    dB.executeSql(`
        CREATE TABLE IF NOT EXISTS Pendency(
          id TEXT PRIMARY KEY NOT NULL,
          type TEXT,
          employeeName TEXT,
          employeeId TEXT,
          date TEXT,
          punch TEXT,
          reason TEXT,
          createdAt TEXT
        );
      `);
  },
]

export default DB_MIGRATIONS
