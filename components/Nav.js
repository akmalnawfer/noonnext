import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'


const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/favourites'>Favourites</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
