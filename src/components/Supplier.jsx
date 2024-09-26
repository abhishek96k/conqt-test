import React, { useEffect, useState } from "react";

const Supplier = ({ supplierData, onSupplierData }) => {
  const [supplierName, setSupplierName] = useState(supplierData.supplierName);
  const [companyName, setCompanyName] = useState(supplierData.companyName);
  const [country, setCountry] = useState(supplierData.country);
  const [state, setState] = useState(supplierData.state);
  const [city, setCity] = useState(supplierData.city);
  const [email, setEmail] = useState(supplierData.email);

  useEffect(() => {
    const updatedSupplierData = {
      supplierName: supplierName,
      companyName: companyName,
      country: country,
      state: state,
      city: city,
      email: email,
    };
    onSupplierData(updatedSupplierData);
  }, [supplierName, companyName, country, state, city, email]);

  return (
    <div className="item-details">
      <div>
        <h1>Supplier Details</h1>
      </div>
      <div className="supplier-values">
        <div className="supplierName-and-companyName">
          <div>
            <label>Supplier Name</label>
            <input
              type="text"
              placeholder="Enter supplier name"
              value={supplierName}
              onChange={(e) => {
                setSupplierName(e.target.value);
              }}
            />
            <label>Max 50 characters</label>
          </div>
          <div>
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Enter compnay name"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
            <label>Max 50 characters</label>
          </div>
        </div>

        <div className="country-and-state">
          <div>
            <label>Country</label>
            <select
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              <option value="usa">USA</option>
              <option value="india">India</option>
            </select>
            <label>Select country form the list</label>
          </div>
          <div>
            <label>State</label>
            <select
              placeholder="Select Date"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            >
              <option vlaue="florida">Florida</option>
              <option vlaue="maharashtra">Maharashtra</option>
            </select>
            <label>Select state form the list</label>
          </div>
        </div>

        <div className="city-and-email">
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <label>Max 50 characters</label>
          </div>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Valid email format</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
