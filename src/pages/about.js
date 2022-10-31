import React from 'react';
import "../index.css";

import imgURL from "../assets/img.jpg";

const About = () => {
    // const imgURL = "../../assets/img.jpg"
    return(
        <div className='about-page-container'>
            <h1 className='about-page-title'>About us</h1>
            <h2 className='about-page-subtitle'>Making business travel work</h2>
            <img className='about-page-img' src={imgURL}  alt="nice hotel reception"  />

            <div className='about-page-text-container'>
            <p className='about-page-text'>At Crowne Plaza Hotels & Resorts we believe business travel should work better.
               In every market in the world, business has changed, and so has work. 
               It’s more digital, more flexible, more mobile, more connected.
               As one of the world's largest upscale brands, we have properties located in major urban centres, gateway cities 
               and resort destinations all around the globe.
            </p>
            </div>
        </div>       
    )
};




export default About;