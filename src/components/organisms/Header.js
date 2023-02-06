import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>LOGO</h1>
        <nav>
            <ul>
                <li>
                  <Link to="/">Strona główna</Link>
                </li>
                <li>
                  <Link to="/przyciski">Przyciski</Link>
                </li>
                <li>
                  <Link to="/tytuly">Tytuły</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header