import React from 'react'
import s from './navbar.module.scss'

const Navbar = () => {
  return (
    <div className={s.navbar}>
        <h1 className={s.navbar__title}>github finder</h1>
    </div>
  )
}

export default Navbar