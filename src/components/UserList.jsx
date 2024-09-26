import React from "react";

const UserList = ({ userData }) => {
  return (
    <div className="user-list">
      <div className="user-list-header">
        <h3>Updated Data</h3>
        <button>Clear All</button>
      </div>

      <div className="user-list-table">
        <table>
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>City</th>
              <th>Country</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                {user.id}
                <td>{user.supplierData?.supplierName}</td>
                <td>{user.itemData?.itemName}</td>
                <td>{user.itemData?.quantity}</td>
                <td>{user.supplierData?.city}</td>
                <td>{user.supplierData?.country}</td>
                <td>{user.supplierData?.email}</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
