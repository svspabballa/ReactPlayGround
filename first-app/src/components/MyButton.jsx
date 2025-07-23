import React from 'react'

const MyButton = ({counter, onClickEvent}) => {
  return (
      <div className="card">
        <button onClick={onClickEvent}>
          count is {counter}
        </button>
      </div>
  )
}

export default MyButton