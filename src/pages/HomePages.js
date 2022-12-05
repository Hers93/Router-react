import React from 'react'

import { Link } from 'react-router-dom'

const HomePages = () => {
  return (
    <div>
        <h1> hola mundo desde home HomePages</h1>
        <Link to='/user'>Usuarios</Link>
    </div>
  )
}

export default HomePages