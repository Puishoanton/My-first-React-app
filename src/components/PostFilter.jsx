import React from 'react'

import Input from './UI/input/Input'
import Select from './UI/select/Select'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder='Searching...'
      />
      <Select
        value={filter.sort}
        change={typeofSort => setFilter({ ...filter, sort: typeofSort })}
        options={[
          { value: 'title', name: 'Title' },
          { value: 'body', name: 'Text' },
        ]}
        defaultValue='Sort by:'
      />
    </div>
  )
}

export default PostFilter
