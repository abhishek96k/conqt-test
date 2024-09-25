import React from "react";

const Supplier = () => {
  return (
    <div>
      <div>
        <h1>Supplier Details</h1>
      </div>
      <div className="supplier-details">
        <div className="supplier-and-company">
          <div>
            <label>Supplier Name</label>
            <input placeholder="Enter Supplier name" />
            <label>Max 50 characters</label>
          </div>
          <div>
            <label>Company Name</label>
            <input placeholder="Enter Company name" />
            <label>Max 50 characters</label>
          </div>
        </div>

        <div className="contry-and-state">
          <div>
            <label>Country</label>
            <input placeholder="USA" />
            <label>Select coutry from the list</label>
          </div>
          <div>
            <label>State</label>
            <input placeholder="Florida" />
            <label>Select state from the list</label>
          </div>
        </div>

        <div className="city-and-email">
          <div>
            <label>City</label>
            <input placeholder="Enter city" />
            <label>Max 50 characters</label>
          </div>
          <div>
            <label>Email Address</label>
            <input placeholder="Enter email address" type="email" />
            <label>valid email format</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
