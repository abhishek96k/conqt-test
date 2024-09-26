import React, { useState } from "react";
import axios from "axios";
import Item from "./Item";
import Supplier from "./Supplier";
import UserList from "./UserList";

const Header = () => {
  const [selected, setSelected] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState([]);
  const [itemData, setItemData] = useState({
    itemName: "",
    quantity: "",
    price: "",
    date: "",
  });

  const [supplierData, setSupplier] = useState({
    supplierName: "",
    companyName: "",
    country: "",
    state: "",
    city: "",
    email: "",
  });

  const handleItemData = (data) => {
    console.log(" handleItemData ===== ", data);
    setItemData(data);
  };

  const handleSupplierData = (data) => {
    console.log(" handleSupplierData ===== ", data);
    setSupplier(data);
  };

  const handleSubmit = async () => {
    const data = await axios.post(
      `https://66f5480f9aa4891f2a249ba4.mockapi.io/data-list/users`,
      {
        itemData,
        supplierData,
      }
    );
    handleGetData();
    setIsSubmitted(true);
  };

  const handleGetData = async () => {
    const data = await axios.get(
      `https://66f5480f9aa4891f2a249ba4.mockapi.io/data-list/users`
    );

    console.log("Data from Header ", data);
    setUserData([...data]);
    console.log("userData from Header ", userData);
  };

  return (
    <>
      <div className="checkbox-list">
        <input
          type="checkbox"
          id="input-checkbox-item"
          checked={selected === "item"}
          onClick={() => setSelected("item")}
        />
        <lable>Item</lable>
        <input
          type="checkbox"
          id="input-checkbox-supplier"
          checked={selected === "supplier"}
          onClick={() => setSelected("supplier")}
        />
        <lable>Supplier</lable>
      </div>
      <div>
        {selected === "item" && (
          <Item itemData={itemData} onItemData={handleItemData} />
        )}
        {selected === "supplier" && (
          <Supplier
            supplierData={supplierData}
            onSupplierData={handleSupplierData}
          />
        )}
      </div>
      <div className="submitted-data">
        <h1>Submitted Data</h1>
        <p>The data submitted by users will be displayed below</p>
        <button onClick={handleSubmit}>Save Changes</button>
      </div>

      <div>{isSubmitted && <UserList userData={userData.data} />}</div>
    </>
  );
};

export default Header;
