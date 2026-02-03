import { Context } from "hono";
import { getMysqlConn } from "../libs/mysql_conn";

const query = `SELECT * FROM users`;

// retrieve all users from database
export const getAllUsersHandler = async (c: Context) => {
    try {
        const mysql_conn = getMysqlConn(c.env);
        const [result] = await mysql_conn.query(query);
        return c.json(result);
    } catch (err) {
        return c.json({ error: "Failed to fetch users" }, 500);
    }
}