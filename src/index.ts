import { Hono } from 'hono';
import { getAllUsersHandler } from './handlers/getAllUsersHandler';

const app = new Hono()

// get all users from database
app.get('/api/get-all-users', getAllUsersHandler)

export default app
