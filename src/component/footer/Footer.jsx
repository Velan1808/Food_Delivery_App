import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

    <div className='footer-content'>
        
       <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rem nam facilis nisi voluptas libero, architecto amet assumenda.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div> 
       </div>

       <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
       </div>
       <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <p> +91 6369961739 </p>
           <p>velankvelu@gmail.com </p>  
      
       </div>
    </div>
    <hr />
    <p className='footer-copyright'>Copyright 2024 Tomato.com - All Rights Reversed</p>
</div>
  )
}

export default Footer