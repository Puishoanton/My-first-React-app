import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import PostItem from './PostItem'

const PostList = ({ postsList, remove, title }) => {
  if (!postsList.length) {
    return (
      <h1
        style={{
          marginTop: '20px',
          fontSize: '1.7vw',
          textAlign: 'center',
        }}>
        There are no posts yet
      </h1>
    )
  }

  return (
    <div className='post-list'>
      <h1>{title}</h1>
      <TransitionGroup className='post-block'>
        {postsList.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames='example'>
            <PostItem number={index} remove={remove} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

export default PostList
