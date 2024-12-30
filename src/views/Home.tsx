import type { FC } from 'hono/jsx'
import Layout from "./Layout"

interface Model {
    messages: string[];
}

const Home: FC<Model> = (props) => {
    return (
        <Layout>
            <h1>Hello Hono!</h1>
            <ul>
                {props.messages.map((message) => {
                    return <li>{message}!!</li>
                })}
            </ul>
        </Layout>
    )
}

export default Home