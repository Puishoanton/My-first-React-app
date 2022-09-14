import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './../components/UI/button/Button'
import Input from './../components/UI/input/Input'
import { AuthContext } from './../context/context'

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)
  const nav = useNavigate()
  const login = e => {
    e.preventDefault()
    localStorage.setItem('auth', 'true')
    setIsAuth(true)
    nav(`/posts`)
  }
  return (
    <div>
      <h1 style={{ margin: '0 0 20px 110px' }}>Login page</h1>
      <form onSubmit={login} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Input type='text' placeholder='Write your Login' />
        <Input type='password' placeholder='Write your Password' />
        <Button additionalClass={'login-btn'}>Login</Button>
      </form>
    </div>
  )
}

export default Login
