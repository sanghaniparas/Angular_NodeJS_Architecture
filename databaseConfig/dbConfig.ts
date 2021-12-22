import * as sql from 'mssql';

let config: sql.config = {
    user: '<enter username>',
    password: '<enter password>',
    server: "<enter server details>",
    database: 'Test',
    connectionTimeout: 10000,
    options: {
        encrypt: true,
        trustServerCertificate: true,
        trustedConnection: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

export async function getConnection() {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        let pool: sql.ConnectionPool = new sql.ConnectionPool(config);
        return await pool.connect();
    } catch (err) {
        return "sql connection error : " + err;
    }
};