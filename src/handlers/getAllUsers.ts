import { Context } from "hono";
import { mysql_conn } from "../libs/mysql_conn";

const query = `SELECT * FROM users`;

export const getAllUsers = async (c: Context) => {
    const [result] = await mysql_conn.query(query);
    console.log(result);
    return c.json(result);
}