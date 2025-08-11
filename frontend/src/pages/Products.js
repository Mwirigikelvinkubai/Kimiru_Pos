import React, { useState } from "react";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";
import { sampleProducts } from "../utils/sampleData";

const Products = ({ currentUser }) => {
  const [products, setProducts] = useState(sampleProducts);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSave = (product) => {
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === product.id ? { ...product } : p)));
      setEditingProduct(null);
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    if (currentUser?.role !== "admin") {
      alert("Only admin can delete products");
      return;
    }
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Products</h1>
      <ProductForm onSave={handleSave} editingProduct={editingProduct} />
      <ProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        canDelete={currentUser?.role === "admin"}
      />
    </div>
  );
};

export default Products;
