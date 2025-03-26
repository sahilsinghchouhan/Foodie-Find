import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Contex/StoreContex";
import axios from "axios"

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItem = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItem.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItem,
      amount: getTotalCartAmount() + 10,
    };
    let response = await axios.post(url +"/api/order/place", orderData, {
      Headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  const navigates = useNavigate()


  useEffect(()=>{
    if (!token) {
      navigates("/cart")
    }
    else if(getTotalCartAmount()===0){

 navigates("/cart")
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="tittle">Delivery Information</p>
        {/* First Name and Last Name in correct order */}
        <div className="multi-fileds">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        {/* Street Address */}
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        {/* City and State */}
        <div className="multi-fileds">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        {/* Zip Code and Country */}
        <div className="multi-fileds">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={data.zipcode}
            type="text"
            placeholder="Zip code"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        {/* Email and Phone Number */}
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email address"
        />
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={data.phone}
          type="Number"
          placeholder="Phone Number"
        />
      </div>
      <div className="place-order-right">
        <span className="text-xl font-semibold">Pay Amount Summary</span>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>₹{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Charge</p>
          <p>₹{getTotalCartAmount() === 0 ? 0 : 10}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}</b>
        </div>
        <button type="submit">Proceed to Pay</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
