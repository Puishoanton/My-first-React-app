import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
      <h1>This page not found</h1>
      <Link to='/posts'>Click to return to the Posts</Link>
    </div>
  )
}

export default Error
