import React from 'react';
import chefs from "./ChefData/Data"; // Data file for chef details
import "./BestChef.css";

const BestChef = () => {
  return (
    <section className="best-chef-section">
      <div className="chef-container">
        <h2 className="chef-heading">Meet Our Best Chefs</h2>
        <div className="chef-grid">
          {chefs.map((chef, index) => (
            <div key={index} className="chef-card">
              <img src={chef.image} alt={chef.name} className="chef-image" />
              <h3 className="chef-name">{chef.name}</h3>
              <p className="chef-message">{chef.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestChef;
