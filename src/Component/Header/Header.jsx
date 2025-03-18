import React from 'react'
import './Header.css'
import Logo from '../../Assets/Logo.jpg'

export default function Header() {
  return (
    <div className='Header' id='Header'>
            <img src={Logo} className='Logo'/>
            < h1 className='Name'>ShriShaant Adsorbent</h1>
            <ul className='Header-Menu'>
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Applications</li>
                <li>Inquiry and Contact Details</li>
            </ul>
    </div>
    
  )
}
