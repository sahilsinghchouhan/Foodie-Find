import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
 
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error('Error fetching data');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  const removeFood = async(foodId)=>{
      const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
      await fetchList();
      if(response.data.success){
        toast.success("Food Removed")
      }
      else{
        toast.error("Error founded")
      }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-title">All Food List</h2>
      <div className="list-table">
        <div className="list-table-header">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Action</span>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-row">
            <img src={`${url}/images/${item.image}`} alt="Food" className="food-image" />
            <span>{item.name}</span>
            <span>{item.category}</span>
            <span>₹{item.price}</span>
            <button onClick={()=>removeFood(item._id)}  className="delete-btn">X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
