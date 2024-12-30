import type { FC } from 'hono/jsx'
import Layout from "./Layout"

type Props = {
    messages: string[];
}

const Home: FC<Props> = (props) => {
    return (
        <Layout>
            <h1>Hello Hono!</h1>
            <h3>Deneme</h3>
            <img src="/static/img/1670180855257.jpg" alt="" />
            <ul>
                {props.messages.map((message) => {
                    return <li>{message}!!</li>
                })}
            </ul>
        </Layout>
    )
}

export default Home