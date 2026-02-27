import React, { useState } from 'react';

export default function HotelDashboard({ user, onLogout }) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', expiry: '' });

  const handleAddItem = () => {
    if (newItem.name && newItem.expiry) {
      setItems([...items, newItem]);
      setNewItem({ name: '', expiry: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-72 bg-white border-r border-gray-100 flex flex-col py-10 px-6">
        <h2 className="text-2xl font-black mb-6">Hotel Dashboard</h2>
        <button onClick={onLogout} className="mt-auto p-4 bg-red-100 text-red-600 rounded-xl font-bold">Logout</button>
      </div>

      <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <h2 className="text-3xl font-black mb-8">Welcome, {user?.name}</h2>

        <div className="bg-white p-6 rounded-2xl shadow-md max-w-md">
          <h3 className="font-bold mb-4">Add Surplus Item</h3>
          <input 
            type="text" 
            placeholder="Item Name" 
            value={newItem.name}
            onChange={e => setNewItem({ ...newItem, name: e.target.value })}
            className="w-full mb-4 px-4 py-3 border rounded-xl"
          />
          <input 
            type="text" 
            placeholder="Expiry Time" 
            value={newItem.expiry}
            onChange={e => setNewItem({ ...newItem, expiry: e.target.value })}
            className="w-full mb-4 px-4 py-3 border rounded-xl"
          />
          <button onClick={handleAddItem} className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold">Add Item</button>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-xl mb-4">Your Items</h3>
          {items.length === 0 && <p className="text-gray-500">No items added yet</p>}
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded-xl shadow-md flex justify-between">
                <span>{item.name}</span>
                <span className="text-gray-400">{item.expiry}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}