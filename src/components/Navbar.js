import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><NavLink className={( {isActive}) => (isActive ? 'active' : 'blue') } to='/'>Home</NavLink></li>
            <li><NavLink className={( {isActive}) => (isActive ? 'active' : 'blue') } to='/about'>About</NavLink></li>
            <li><NavLink className={( {isActive}) => (isActive ? 'active' : 'blue') } to='/users'>Users</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar