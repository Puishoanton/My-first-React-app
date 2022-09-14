import React from 'react'

import styles from './modal.module.scss'

const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.modal]

  if (visible) {
    rootClasses.push(styles.active)
  }
  return (
    <div className={rootClasses.join(' ')}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>
          <h2>Add new post</h2>
          <button onClick={() => setVisible(false)} className={styles['close']}>
            &times;
          </button>
        </div>
        <div className={styles['modal-body']}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
