import React from 'react'

import styles from './select.module.scss'

const Select = ({ options, defaultValue, value, change }) => {
  return (
    <select value={value} onChange={e => change(e.target.value)} className={styles['select-css']}>
      <option disabled value=''>
        {defaultValue}
      </option>
      {options.map(el => (
        <option key={el.value} value={el.value}>
          {el.name}
        </option>
      ))}
    </select>
  )
}

export default Select
