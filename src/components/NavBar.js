import React from 'react'
import {GiCoinsPile} from 'react-icons/gi'
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <Link to='/'>
     <div className="navbar">
       <GiCoinsPile className='icon'/>
        <h1>Coin<span className='purple'>verse</span></h1>
        </div> 
    </Link>
  )
}

export default NavBar
