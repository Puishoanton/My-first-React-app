import React from 'react'

import styles from './button.module.scss'

const Button = ({ children, additionalClass, ...props }) => {
  let rootClass = [styles.btn]
  if (additionalClass) rootClass.push(styles[additionalClass])
  return (
    <button {...props} className={rootClass.join(' ')}>
      {children}
    </button>
  )
}

export default Button
