import React, { useState, useEffect } from "react";

const ProductForm = ({ onSave, editingProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    price: "",
    stock: ""
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ name: "", code: "", price: "", stock: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 border mt-4">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mr-2"
        required
      />
      <input
        type="text"
        name="code"
        placeholder="Product Code (e.g., barcode)"
        value={formData.code}
        onChange={handleChange}
        className="border p-2 mr-2"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="border p-2 mr-2"
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
// This component allows users to add or edit products in the inventory.
// It uses a controlled form to manage the product data and calls the onSave function