import mysql from "mysql2/promise";

interface IEnv {
    MYSQL_HOST: string;
    MYSQL_PORT: string;
    MYSQL_USER: string;
    MYSQL_PASSWORD: string;
    MYSQL_DATABASE_NAME: string;
}

// database connection pool
export const getMysqlConn = (env: IEnv) => {
    return mysql.createPool({
        host: env.MYSQL_HOST,
        port: Number(env.MYSQL_PORT),
        user: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: env.MYSQL_DATABASE_NAME,
        // @ts-ignore
        disableEval: true
    })
}