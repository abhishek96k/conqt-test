import React, { useEffect, useState } from "react";

const Item = ({ itemData, onItemData }) => {
  const [itemName, setItemName] = useState(itemData.itemName);
  const [quantity, setQuantity] = useState(itemData.quantity);
  const [price, setPrice] = useState(itemData.price);
  const [date, setDate] = useState(itemData.date);

  useEffect(() => {
    const updatedItemData = {
      itemName: itemName,
      quantity: quantity,
      price: price,
      date: date,
    };
    onItemData(updatedItemData);
  }, [itemName, quantity, price, date]);

  return (
    <div className="item-details">
      <div>
        <h1>Item Details</h1>
      </div>
      <div className="item-values">
        <div className="item-and-quantity">
          <div>
            <label>Item Name</label>
            <input
              type="text"
              placeholder="Enter item name"
              value={itemName}
              onChange={(e) => {
                setItemName(e.target.value);
              }}
            />
            <label>Max 50 characters</label>
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="number"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <label>Numeric value</label>
          </div>
        </div>

        <div className="item-and-quantity">
          <div>
            <label>Unit Price</label>
            <input
              type="number"
              placeholder="Enter unit price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <label>Numeric value (USD)</label>
          </div>
          <div>
            <label>Date of submission</label>
            <input
              type="date"
              placeholder="Select Date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <label>Format MM/DD/YYYY</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
