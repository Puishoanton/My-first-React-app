import React from 'react'

import { useTotalPage } from '../../../hooks/useTotalPages'

const Pagination = ({ totalPages, limit, page, changePage }) => {
  let pagesArray = useTotalPage(totalPages, limit)

  return (
    <div className='page-wrapper'>
      {pagesArray.map(btn => {
        console.log()

        return (
          <span
            key={Date.now() + btn}
            onClick={() => changePage(btn)}
            className={page === btn ? 'page page-current' : 'page'}>
            {btn}
          </span>
        )
      })}
    </div>
  )
}

export default Pagination
