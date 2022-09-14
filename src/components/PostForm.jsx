import React, { useState } from 'react'
import Input from './UI/input/Input'
import Button from './UI/button/Button'

const PostForm = ({ createPost }) => {
  const [input, setInput] = useState({ title: '', body: '' })

  const addNewPost = e => {
    e.preventDefault()

    const newPost = {
      ...input,
      id: Date.now(),
    }

    createPost(newPost)

    setInput({ title: '', body: '' })
  }

  return (
    <form className='form'>
      <Input
        value={input.title}
        onChange={e => setInput({ ...input, title: e.target.value })}
        type='text'
        placeholder='Write your title'
      />
      <Input
        value={input.body}
        onChange={e => setInput({ ...input, body: e.target.value })}
        type='text'
        placeholder='Write your text'
      />
      <Button  onClick={addNewPost}>Add new post</Button>
    </form>
  )
}

export default PostForm
