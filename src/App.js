import React, { useEffect, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import { AuthContext } from './context/context'

import './styles/style.scss'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
    if (localStorage.getItem('auth')) {
      return setIsAuth(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
