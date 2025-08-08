import React from "react";

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Product Name</th>
          <th className="p-2 border">Code</th>
          <th className="p-2 border">Price</th>
          <th className="p-2 border">Stock</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p, index) => (
          <tr key={p.id}>
            <td className="p-2 border">{index + 1}</td>
            <td className="p-2 border">{p.name}</td>
            <td className="p-2 border">{p.code}</td>
            <td className="p-2 border">{p.price}</td>
            <td className="p-2 border">{p.stock}</td>
            <td className="p-2 border">
              <button
                onClick={() => onEdit(p)}
                className="bg-blue-500 text-white px-2 py-1 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(p.id)}
                className="bg-red-500 text-white px-2 py-1"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
