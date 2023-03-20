import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AppHeader.module.css'

function AppHeader() {
  return (
    <header className={styles.header}>
          Weather Dashboard
        <nav>
            <ul>
                <li><Link to='/'> Homepage </Link></li>
                <li><Link to='/courses'> Search Locations </Link></li>
                <li><Link to='/students'> Show Saved Locations </Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default AppHeader