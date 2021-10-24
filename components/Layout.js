import Nav from './Nav'
import Meta from './Meta'
import styles from '../styles/Layout.module.scss'
import 'bootstrap/dist/css/bootstrap.css'



const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <main>
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
