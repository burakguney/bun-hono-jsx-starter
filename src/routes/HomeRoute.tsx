import { Hono } from 'hono'
import { getHome } from '../controllers/HomeController'

const homeRoute = new Hono()

homeRoute.get('/', getHome)

export default homeRoute