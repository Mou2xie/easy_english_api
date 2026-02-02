import { Hono } from 'hono'
import { mysql_conn } from './libs/mysql_conn';

const app = new Hono()

// get all users from database
app.get('/api/getusers', async (c) => {
  const query = `SELECT * FROM users`;
  const [result] = await mysql_conn.query(query);
  console.log(result);
  return c.json(result);
})

export default app
