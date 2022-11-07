import React from 'react'

// Una funcion flecha
const UseState = ({label,text}) => {

  console.log('rendered component: UseState');
  return (
    <div>
        <label>{label}</label>
        <label>{text}</label>
    </div>
  )
}

export default UseState