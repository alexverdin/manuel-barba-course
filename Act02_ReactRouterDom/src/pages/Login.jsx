import React from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Title title="Login" fontColor="orange"/>
      <span> Login Screen</span>
      <br />
      <Link to={'/'}>Back to home</Link>
    </div>
  )
}

export default Login