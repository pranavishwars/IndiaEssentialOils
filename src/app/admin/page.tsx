"use client";

import { useState } from "react";

export default function AdminPage() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-ink">Manage Products</h1>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-secondary transition-colors"
        >
          {isAdding ? "Cancel" : "Add Product"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-4">Add New Product</h2>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Product creation would hit a Server Action here.'); setIsAdding(false); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-sub mb-1">Product Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary" placeholder="e.g. Lavender Essential Oil" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-sub mb-1">Category</label>
                <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary">
                  <option>ESSENTIAL_OIL</option>
                  <option>CARRIER_OIL</option>
                </select>
              </div>
            </div>
            <div>
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-secondary transition-colors">
                Save Product
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-sub uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-sub uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-sub uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-sub uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-ink">Lavender Essential Oil</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-sub">ESSENTIAL_OIL</td>
              <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-primary hover:text-secondary">Edit</a>
              </td>
            </tr>
            {/* More rows would be mapped here from Server Component props or client-side SWR fetch */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
