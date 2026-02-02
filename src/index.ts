import { Hono } from 'hono';
import { getAllUsers } from './handlers/getAllUsers';

const app = new Hono()

// get all users from database
app.get('/api/get-all-users', getAllUsers)

export default app
