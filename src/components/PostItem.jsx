import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './UI/button/Button'

const PostItem = props => {
  const nav = useNavigate()

  return (
    <div className='post'>
      <h1 className='title'>
        <span>{props.post.id}.</span>
        {props.post.title}
      </h1>
      <p className='text'>{props.post.body}</p>
      <Button onClick={() => nav(`/posts/${props.post.id}`)} additionalClass={'btn-show'}>
        Show comments
      </Button>
      <Button
        onClick={() => {
          props.remove(props.post)
        }}>
        Delete
      </Button>
    </div>
  )
}

export default PostItem
