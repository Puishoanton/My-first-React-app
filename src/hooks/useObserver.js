//ref = lastElement, canLoad = page < totalPage, isLoading = isPostLoading, callback =  setPage(page + 1)
import { useEffect, useRef } from 'react'
export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef()

  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect() // якщо у полі каррент уже є за чим наглядає обсервер то ми відключаємо
    let cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    }
    observer.current = new IntersectionObserver(cb)
    observer.current.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])
}
