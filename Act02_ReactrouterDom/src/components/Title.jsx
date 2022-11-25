import React from 'react'

const Title = ({title, fontColor}) => {
  console.log('rendered component: Title');
  return (
    <div>
        <h1 style={{ color: fontColor }}>{title}</h1>
    </div>
  )
}

export default Title