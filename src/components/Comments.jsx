import React from 'react'

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((com, i) => (
        <div style={{ textAlign: 'center', margin: '30px' }} key={i}>
          <h3 style={{ margin: '10px' }}>
            {i + 1}. {com.email}
          </h3>

          <h5>{com.body}</h5>
          <hr style={{ marginTop: '10px' }} />
        </div>
      ))}
    </div>
  )
}

export default Comments
