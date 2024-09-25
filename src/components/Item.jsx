import React from "react";

const Item = () => {
  return (
    <div>
      <div>
        <h1>Item Details</h1>
      </div>
      <div className="item-details">
        <div className="item-and-quantity">
          <div>
            <label>Item Name</label>
            <input placeholder="Enter item name" />
            <label>Max 50 characters</label>
          </div>
          <div>
            <label>Item Name</label>
            <input placeholder="Enter item name" />
            <label>Max 50 characters</label>
          </div>
        </div>

        <div className="item-and-quantity">
          <div>
            <label>Unit Price</label>
            <input placeholder="Enter unit price" />
            <label>Numeric value (USD)</label>
          </div>
          <div>
            <label>Date of submission</label>
            <input placeholder="Select Date" />
            <label>Format MM/DD/YYYY</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
