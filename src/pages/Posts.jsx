import React, { useEffect, useRef, useState } from 'react'

import PostService from '../API/PostService'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import Button from '../components/UI/button/Button'
import Loader from '../components/UI/loader/Loader'
import Modal from '../components/UI/modal/Modal'
import Pagination from '../components/UI/pagination/Pagination'
import { useFetching } from '../hooks/useFetching'
import { usePosts } from '../hooks/usePosts'
import '../styles/style.scss'
import { getPageCount } from '../utils/page'
import { useObserver } from './../hooks/useObserver'
import Select from './../components/UI/select/Select'

const Posts = () => {
  const [posts, setPosts] = useState([
    // { id: 1, title: 'React', body: 'Ipsum dolor sit amet.' },
    // { id: 2, title: 'TypeScript', body: 'Dolor dolor sit amet. ' },
    // { id: 3, title: 'JavaScript', body: 'Lorem ipsum dolor sit.' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearcedPost = usePosts(posts, filter.sort, filter.query)

  const [modal, setModal] = useState(false)

  // counting pages

  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])

    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  const changePage = page => {
    setPage(page)
  }
  const removePost = removedItem => {
    setPosts(posts.filter(item => item.id !== removedItem.id))
  }
  const createPost = addedPost => {
    setPosts([...posts, addedPost])
    setModal(false)
  }
  const lastElement = useRef()

  useObserver(lastElement, page < totalPages, isPostLoading, () => setPage(page + 1))

  useEffect(() => {
    fetchPosts(limit, page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit])

  return (
    <div className='app'>
      <h1 style={{ textAlign: 'center', margin: '40px 0 0' }}> This is my react app</h1>
      <hr style={{ margin: '40px 0' }} />
      <Button style={{ margin: '0  120px' }} onClick={() => setModal(true)}>
        Add new post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </Modal>
      <hr style={{ margin: '40px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <hr style={{ margin: '40px 0' }} />
      <h1 style={{ textAlign: 'center' }}>How many posts do you want to load</h1>
      <Select
        defaultValue='Show posts:'
        value={limit}
        change={value => setLimit(value)}
        options={[
          { value: '5', name: '5' },
          { value: '10', name: '10' },
          { value: '15', name: '15' },
          { value: '-1', name: 'all' },
        ]}
      />
      <hr style={{ margin: '40px 0' }} />

      {postError && <h1 style={{ textAlign: 'center' }}>There is some error: {postError}</h1>}

      <PostList
        postsList={sortedAndSearcedPost}
        remove={removePost}
        title={'Posts list from JSON Placeholder'}
      />
      <div ref={lastElement} style={{ height: '20px', background: 'red' }}></div>

      {isPostLoading && <Loader />}

      <Pagination totalPages={totalPages} limit={limit} page={page} changePage={changePage} />
    </div>
  )
}

export default Posts
