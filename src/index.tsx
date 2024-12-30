import { Hono } from 'hono'
import homeRoute from './routes/HomeRoute'
const app = new Hono()

app.route("/", homeRoute)

export default app