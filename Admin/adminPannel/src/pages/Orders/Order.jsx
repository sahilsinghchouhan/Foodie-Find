import React, { useEffect, useState } from "react";
import "./Order.css";
import { toast } from "react-toastify";
import axios from "axios";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllorders = async () => {
    const response = await axios.get(url + "/api/orders/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }

    useEffect(()=>{
      fetchAllorders()
    },[])
  };
  const statusHandler = async(event,orderId)=>{
const response = await axios.post(url+"/api/order/status",{
  orderId,
  status:event.target.value
})
if (response.data.success) {
  await fetchAllorders()
}
  }
  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-items">
            <p>Icon parcer</p>
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " X " + item.quantity;
                  } else {
                    return item.name + " X " + item.quantity + ",";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + "" + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street + " ,"}</p>
                <p>{order.address.city + " ," + order.address.state+"," + order.address.country+"," + order.address.zipcode + ","}</p>
                <p></p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items:{order.item.length}</p>
            <p>INR{order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._Id)} value={order.status} >
              <option value="food Proceesing">food Proceesing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
