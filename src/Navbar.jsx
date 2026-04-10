import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
       <div>
       
        <Link to='/'>Home</Link>
        <Link to='/about'>AboutUs</Link>
        <Link to='/contact'>ContactUs</Link>
    </div>
    </div>
  )
}

export default Nav