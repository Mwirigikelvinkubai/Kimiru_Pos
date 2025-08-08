import { useState } from "react";

const sampleProducts = [
  { id: 1, name: "Bread", price: 50 },
  { id: 2, name: "Milk", price: 60 },
  { id: 3, name: "Sugar", price: 120 },
  { id: 4, name: "Rice", price: 200 },
];

function Sales() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);

  const filtered = sampleProducts.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {/* Product Search */}
      <div className="col-span-2">
        <h2 className="text-2xl font-semibold mb-4">Search Products</h2>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <div className="grid grid-cols-2 gap-4">
          {filtered.map(product => (
            <div
              key={product.id}
              className="p-4 border rounded shadow cursor-pointer hover:bg-gray-100"
              onClick={() => addToCart(product)}
            >
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p>KES {product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-1"
              >
                <span>{item.name} x{item.qty}</span>
                <span>KES {item.price * item.qty}</span>
                <button
                  className="text-red-500 text-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 font-bold">Total: KES {total}</div>
        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Sales;
