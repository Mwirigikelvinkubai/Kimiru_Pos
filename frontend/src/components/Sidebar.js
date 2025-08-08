import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Kimiru_Pos</h2>
      <nav className="space-y-4">
        <Link to="/" className="block hover:text-gray-200">Dashboard</Link>
        <Link to="/sales" className="block hover:text-gray-200">Sales</Link>
        <Link to="/products" className="block hover:text-gray-200">Products</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
