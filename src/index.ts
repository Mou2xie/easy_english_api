import { Hono } from 'hono';
import { getAllUsersHandler } from './handlers/getAllUsersHandler';

const app = new Hono()

app.get('/api/get-all-users', getAllUsersHandler)

export default app
