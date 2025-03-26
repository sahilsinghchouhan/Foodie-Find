import React from 'react'
import "./Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";







const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h2 className='text-2xl font-semibold font-[Great Vibes]  text-[#fe5005]'>Foodie Finds</h2>
                <p>Bringing the best flavors to your doorstep</p>
                <div className="footer-social-icon flex gap-2 cursor-pointer">
               < FaFacebookSquare className='text-2xl text-[#316FF6]  '/>
              < LuInstagram className='text-2xl text-[#e95950]  '/>
              <FaXTwitter className='text-2xl text-[#000]'/>
              <BsLinkedin className='text-2xl  text-[#0077B5]'/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>Phone: +91-XXXXXXXXXX
                    </li>
                    <li>Email: chouhansahil783@gmail.com
                    </li>
                    <li>Address: 123 Food Street, Jaipur, India</li>
                </ul>
            </div>

        </div>
        <hr />
        <p>© 2024 Foodie Finds. All rights reserved.</p>
    </div>
  )
}

export default Footer