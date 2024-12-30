import { Context } from 'hono'
import Home from '../views/Home'
import * as homeService from '../services/HomeService'

export const getHome = async (context: Context) => {
    var result = await homeService.getAllBlogs()
    const messages = ['Günaydın', 'Tünaydın', 'Yakşanlar']
    return context.html(<Home messages={messages} />)
}