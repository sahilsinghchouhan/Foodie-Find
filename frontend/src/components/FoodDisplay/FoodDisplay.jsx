import React from "react";
import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../Contex/StoreContex";
import FoodItem from "../FoodItem/FoodItem";




const FoodDisplay = ({ category }) => {
 
  const {food_list} = useContext(StoreContext)

  return (
    <div className="food-display" id="food-display">
      <h1>Our Best Food List</h1>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  rating={item.rating}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
