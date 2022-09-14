import { useMemo } from 'react'

import { getPagesArray } from '../utils/page'

export const useTotalPage = (totalCount, limit) => {
  const pagesArray = useMemo(() => {
    return getPagesArray(totalCount)
  }, [totalCount, limit])
  return pagesArray
}
