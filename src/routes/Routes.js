import About from '../pages/About'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'
import Login from './../pages/Login'

export const privateRoutes = [
  { exact: 'true', path: '/posts', element: <Posts /> },
  { exact: 'true', path: '/about', element: <About /> },
  { exact: 'true', path: '/posts/:id', element: <PostIdPage /> },
]
export const publicRoutes = [{ exact: 'true', path: '/login', element: <Login /> }]
