import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title';

const Home = () => {
    const [name, setName] = useState('Alex');

  return (
    <div>
        <Title title="Home" fontColor="purple"/>

        <Link to={'/login'}>Go to Login</Link>
        <br/> 
        <Link to={`/show/${name}`}>Go to Show</Link>
    </div>
  )
}

export default Home