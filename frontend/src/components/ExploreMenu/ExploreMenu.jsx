import React from 'react'
import "./ExploreMenu.css"
import { menu_list} from "../../assets/assets"

const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>
        Explore our diverse menu filled with mouthwatering dishes crafted to satisfy your cravings and make every meal unforgettable.
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=> setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='menu-images'/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>

            < hr className='mt-2 mb-2 h-0.5 bg-[#e2e2e2] ' />
    </div>
  )
}

export default ExploreMenu