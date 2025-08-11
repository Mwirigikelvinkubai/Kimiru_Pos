import React from "react";
import "../styles/Dashboard.css";

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="dashboard-container">
      <h1>Product Dashboard</h1>
      <div className="table-container">
        <button className="add">+ Add Product</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>${p.price}</td>
                  <td>{p.category}</td>
                  <td>
                    <button className="edit" onClick={() => onEdit(p)}>Edit</button>
                    <button className="delete" onClick={() => onDelete(p.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
