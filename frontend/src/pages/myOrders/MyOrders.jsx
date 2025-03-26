import React, { useState } from 'react'
import "./MyOrders.css"
import { useContext } from 'react'
import {StoreContext} from "../../Contex/StoreContex"
import { useEffect } from 'react'
import { assets } from '../../assets/assets'



const MyOrders = () => {


const {url,token} = useContext(StoreContext)
    const [data,setData] = useState([])

    const fetchOrder = async() =>{
        const response = await axios.post(url+"/api/order/userorder",{},{headers:{token}})
        setData(response.data.data)
    }

    useEffect(()=>{
        if (token) {
          fetchOrder()  
        }
    },[token])
    
  return (
    <div className='my-orders'>
<h2>My orders</h2>
<div className="container">
    {data.map((order,index)=>{
return(
    <div key={index} className='my-orders-order'>
<img src={assets.parcel_icon} alt="" />
<p>{order.items.map((item,index)=>{
    if (index===order.items.length-1) {
        return item.name+"X" + item.quantity
    }
    else{
        return item.name+"X" + item.quantity+" "
    }
})}</p>
<p>
    {order.amount}.00
</p>
<p>Items:{order.items.length}</p>
<p><span>&#x25cf</span> <br >{order.status}</br></p>
<button>Track Order</button>
    </div>
)
    })}
</div>
    </div>
  )
}

export default MyOrders