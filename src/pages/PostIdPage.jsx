import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from './../hooks/useFetching'
import PostService from './../API/PostService'
import Loader from '../components/UI/loader/Loader'
import Comments from '../components/Comments'

const PostIdPage = () => {
  const params = useParams().id
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [fetchPostById, isLoading, error] = useFetching(async id => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  // eslint-disable-next-line no-unused-vars
  const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async id => {
    const response = await PostService.getCommentsById(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params)
    fetchCommentsById(params)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', padding: '20px 40px' }}>
        Post Id Page number: <span style={{ color: '#ff5e00' }}>{params}.</span>
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ textAlign: 'center' }}>
          {post.id}. {post.title}
        </div>
      )}
      <h2 style={{ textAlign: 'center' }}>Comments: </h2>
      <hr style={{ marginTop: '10px' }} />
      {isCommentsLoading ? <Loader /> : <Comments comments={comments} />}
    </div>
  )
}

export default PostIdPage
