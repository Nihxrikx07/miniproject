import React from 'react';

export default function UserDashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-white pb-20">
      <header className="bg-emerald-600 pt-12 pb-24 px-6 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-emerald-100 font-bold text-sm uppercase">Welcome back,</p>
            <h2 className="text-3xl font-black">{user?.name}</h2>
          </div>
          <button onClick={onLogout} className="p-3 bg-white/10 rounded-2xl hover:bg-white/20">Logout</button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <h3 className="text-2xl font-black text-gray-900 mt-10 mb-8">Happening Now</h3>
        <p className="text-gray-500">Food auctions happening in your area...</p>
        {/* Add listing cards here */}
      </div>
    </div>
  );
}