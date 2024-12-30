import { Context } from 'hono'
import Home from '../views/Home'

export const getHome = (context: Context) => {
    const messages = ['Günaydın', 'Tünaydın', 'Yakşanlar']
    return context.html(<Home messages={messages} />)
}