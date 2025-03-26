import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'


const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'> 
    <p>Enhance Your Experience  <br />  Get the Foodie Finds App Today!</p>
    <div className="app-download-platform">
    <img src={assets.play_store} alt="playstore" />
    <img src={assets.app_store} alt="" />
    </div>
    </div>
  )
}

export default AppDownload