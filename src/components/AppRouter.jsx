import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthContext } from '../context/context'
import Error from '../pages/Error'
import { privateRoutes, publicRoutes } from '../routes/Routes'
import Login from './../pages/Login'
import Loader from './UI/loader/Loader'

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return isAuth ? (
    <Routes>
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<Navigate replace to='/error' />} />

      {privateRoutes.map((el, i) => {
        return <Route key={i} exact={el.exact} path={el.path} element={el.element} />
      })}
    </Routes>
  ) : (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Navigate replace to='/login' />} />

      {publicRoutes.map((el, i) => {
        return <Route key={i} exact={el.exact} path={el.path} element={el.element} />
      })}
    </Routes>
  )
}

export default AppRouter
