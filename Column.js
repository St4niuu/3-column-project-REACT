import React from 'react'

function Column({image, header, content}) {
  return (
    <div className='column'>
        <img src={image} alt='image' />
        <h1>{header}</h1>
        <div className='content'>{content}</div>
        <button>Learn More</button>
    </div>
  )
}

export default Column
