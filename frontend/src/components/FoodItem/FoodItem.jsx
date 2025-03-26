import React, { useContext } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Contex/StoreContex";

const FoodItem = ({ id, name, price, description, image, rating }) => {


const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
 

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <button onClick={()=>addToCart(id)} className="add-to-cart-btn">Add to Cart</button>
        ) : (
          <div className="item-control">
            <button onClick={()=>removeFromCart(id)} className="minus-btn">
              <AiOutlineMinusCircle />
            </button>
            <span className="quantity">{cartItems[id]}</span>
            <button onClick={()=>addToCart(id)} className="plus-btn">
              <BsPlusCircle />
            </button>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <h2>{rating}</h2>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
