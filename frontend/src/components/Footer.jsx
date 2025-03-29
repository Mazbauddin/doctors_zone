import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div>
            {/* ---------left Section */}
            <div>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at nisi beatae excepturi vel provident velit, error iste quas ipsum, consequatur quidem deleniti maxime, nostrum eveniet atque perspiciatis inventore eius.</p>
            </div>
            {/* ---------Center Section */}
            <div>
                <p>Company</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* ---------Right Section */}
            <div>
                <p>Get In Touch</p>
                <ul>
                    <li>+8801787769270</li>
                    <li>mazbauddin2010@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* Copyright Section */}
        <div>

        </div>
    </div>
  )
}

export default Footer