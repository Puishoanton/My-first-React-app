import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import Button from './../button/Button'
import { AuthContext } from './../../../context/context'

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        {isAuth ? <Button onClick={logout}>Logout</Button> : ''}
        <Link to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  )
}

export default Navbar
