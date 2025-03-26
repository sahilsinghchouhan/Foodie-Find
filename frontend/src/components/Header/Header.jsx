import React, { useState } from 'react'
import "./Header.css"
import { MdKeyboardDoubleArrowLeft , MdKeyboardDoubleArrowRight } from "react-icons/md";
  


const Header = () => {


  const [currentImage,setCurrentImage]=useState(0);

  const images=[
    "/header_img.jpg",
    "/keremkaplan.jpg",
    "/women-hand-plate.jpg"
  ];

  const handlePrev=()=>{
    setCurrentImage((prevIndex)=>
    prevIndex===0 ? images.length-1:prevIndex-1)
  };

  const handleNext=()=>{
    setCurrentImage((prevIndex)=>
    prevIndex===images.length-1?0:prevIndex+1)
  }

  return (
    <div className='header' style={{backgroundImage:`url(${images[currentImage]})`}}>
      
      <button ><MdKeyboardDoubleArrowLeft onClick={handlePrev} className='absolute bottom-64 text-4xl mx-4 text-white' id='nav-icon' /></button>
      <button ><MdKeyboardDoubleArrowRight onClick={handleNext} className='absolute bottom-64 right-4 text-4xl mx-4 text-white' id='nav-icon'/></button>
        <div className="header-contents">
            <h1 className='font-medium text-white text-5xl '>Zaika jo apno ka rishta jode</h1>
            <p className=' text-2xl text-white'>Discover flavors that bring hearts closer. At Foodie Finds, we serve dishes crafted to connect and celebrate cherished bonds</p>
            <button className='border-none text-[#747474] rounded-full font-bold p-2  bg-white px-3'>View Menu</button>
        </div>
        
        </div>
  )
}

export default Header