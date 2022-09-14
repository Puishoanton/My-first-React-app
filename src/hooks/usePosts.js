import { useMemo } from 'react'

export const useSortedPost = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }

    return posts
  }, [posts, sort])
  return sortedPosts
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPost(posts, sort)
  const sortedAndSearcedPost = useMemo(() => {
    return sortedPosts.filter(
      post => post.title.includes(query) || post.title.toLowerCase().includes(query)
    )
  }, [query, sortedPosts])
  return sortedAndSearcedPost
}
