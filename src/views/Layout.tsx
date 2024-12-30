import type { FC } from 'hono/jsx'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout: FC = (props) => {
  return (
    <html>
      <Header />
      <body>{props.children}</body>
      <Footer />
    </html>
  )
}

export default Layout