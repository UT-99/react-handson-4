
import React from 'react'
import { Link } from 'react-router-dom'
import '../newStyles.css'

function Navigation(){
  return (
    <div className="navbar">
        <li><Link to="/Home" className='listItem'>Home</Link></li>
        <li><Link to="/Student" className='listItem'>Students</Link></li>
        <li><Link to="/Contact" className='listItem'>Contact Us</Link></li> 
    </div>
  )
}

export default Navigation