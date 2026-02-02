import mysql from "mysql2/promise";

// database config
const config = {
    host: process.env.MYSQL_HOST ?? '',
    port: parseInt(process.env.MYSQL_PORT ?? ''),
    user: process.env.MYSQL_USER ?? '',
    password: process.env.MYSQL_PASSWORD ?? '',
    database: process.env.MYSQL_DATABASE_NAME ?? '',
    // @ts-ignore
    disableEval: true
}

// database connection pool
export const mysql_conn = mysql.createPool(config);
console.log('MySQL connection pool created');
