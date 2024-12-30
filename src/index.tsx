import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

import homeRoute from './routes/HomeRoute'

const app = new Hono()
app.use('/static/*', serveStatic({ root: './' }))

app.route("/", homeRoute)

export default app