import React, { useState } from "react";
import { Mail, Lock, Leaf, ArrowRight, Building, LogOut, Clock, Star, TrendingDown, MapPin } from "lucide-react";

// --- SHARED COMPONENTS ---
const AuthLayout = ({ title, subtitle, children, onBack }) => (
  <div style={{
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
    background: "#f3f4f6",
  }}>
    <div style={{
      maxWidth: "400px",
      width: "100%",
      background: "white",
      borderRadius: "30px",
      padding: "40px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      border: "1px solid #e5e7eb",
    }}>
      {onBack && (
        <button onClick={onBack} style={{
          marginBottom: "20px",
          color: "#4ade80",
          fontWeight: "600",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
          background: "none",
          border: "none",
        }}>
          <ArrowRight size={16} /> Back
        </button>
      )}
      <h2 style={{ fontSize: "28px", fontWeight: "900", marginBottom: "10px", textAlign: "center" }}>{title}</h2>
      <p style={{ color: "#6b7280", fontWeight: "500", marginBottom: "25px", textAlign: "center" }}>{subtitle}</p>
      {children}
    </div>
  </div>
);

// --- LANDING PAGE ---
const LandingPage = ({ onNavigate }) => (
  <div style={{ textAlign: "center", padding: "80px 20px", background: "#f9fafb" }}>
    <Leaf size={50} color="#10b981" style={{ marginBottom: "20px" }} />
    <h1 style={{ fontSize: "48px", fontWeight: "900", marginBottom: "20px" }}>
      Eat Good. <span style={{ color: "#10b981" }}>Save Better.</span>
    </h1>
    <button onClick={() => onNavigate("register-user")} style={{ padding: "15px 40px", background: "#10b981", color: "white", fontWeight: "700", borderRadius: "25px", border: "none", cursor: "pointer" }}>Join as Consumer</button>
    <button onClick={() => onNavigate("register-hotel")} style={{ padding: "15px 40px", marginLeft: "10px", borderRadius: "25px", border: "2px solid #10b981", background: "white", cursor: "pointer" }}>Join as Hotel</button>
  </div>
);

// --- REGISTRATION VIEW ---
const RegistrationView = ({ type, onRegisterSuccess, onBack }) => {
  const isHotel = type === "hotel";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout title={isHotel ? "Hotel Partner" : "Food Saver"} subtitle={isHotel ? "Start recovering revenue from surplus" : "Get quality meals at lower prices"} onBack={onBack}>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" placeholder={isHotel ? "Restaurant Name" : "Full Name"} value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "20px", border: "1px solid #e5e7eb" }} />
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "20px", border: "1px solid #e5e7eb" }} />
        <input type={showPassword ? "text" : "password"} placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "20px", border: "1px solid #e5e7eb" }} />
        <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>{showPassword ? "🙈" : "👁"}</span>
        <button onClick={() => onRegisterSuccess(type, name)} style={{ width: "100%", padding: "12px", borderRadius: "25px", border: "none", background: "#10b981", color: "white", fontWeight: "700", cursor: "pointer" }}>Register & Continue</button>
      </div>
    </AuthLayout>
  );
};

// --- LOGIN VIEW ---
const LoginView = ({ onLogin, onBack }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  return (
    <AuthLayout title="Login" subtitle="Select your role to continue" onBack={onBack}>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "20px", border: "1px solid #e5e7eb" }} />
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setRole("user")} style={{ flex: 1, background: role === "user" ? "#10b981" : "#f3f4f6", color: role === "user" ? "white" : "#111827", padding: "10px", borderRadius: "15px", border: "none" }}>Consumer</button>
        <button onClick={() => setRole("hotel")} style={{ flex: 1, background: role === "hotel" ? "#10b981" : "#f3f4f6", color: role === "hotel" ? "white" : "#111827", padding: "10px", borderRadius: "15px", border: "none" }}>Hotel</button>
      </div>
      <button onClick={() => onLogin(role, name)} style={{ width: "100%", padding: "12px", borderRadius: "25px", border: "none", background: "#10b981", color: "white", fontWeight: "700", cursor: "pointer" }}>Sign In</button>
    </AuthLayout>
  );
};

// --- USER DASHBOARD ---
const UserDashboard = ({ user, onLogout }) => {
  const categories = ["All", "Continental", "Indian", "Desserts", "Beverages"];
  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", padding: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <div>
          <p style={{ color: "#4ade80", fontWeight: "700", fontSize: "14px" }}>Welcome back,</p>
          <h2 style={{ fontSize: "28px", fontWeight: "900" }}>{user.name}</h2>
        </div>
        <button onClick={onLogout} style={{ background: "#d1d5db", border: "none", padding: "10px", borderRadius: "10px", cursor: "pointer" }}>
          <LogOut size={20} />
        </button>
      </div>
      <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "20px" }}>
        {categories.map(c => (
          <button key={c} style={{ flex: "0 0 auto", padding: "10px 20px", borderRadius: "20px", border: "none", background: c === "All" ? "#10b981" : "#fff", color: c === "All" ? "#fff" : "#111827", fontWeight: "700" }}>{c}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} style={{ background: "white", borderRadius: "20px", padding: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
            <div style={{ position: "relative", height: "200px", marginBottom: "15px" }}>
              <img src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1504674900247-0877df9cc836' : '1513104890138-7c749659a591'}?auto=format&fit=crop&w=500`} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
              <div style={{ position: "absolute", top: "10px", left: "10px", background: "rgba(255,255,255,0.9)", borderRadius: "10px", padding: "5px 10px", display: "flex", alignItems: "center", gap: "5px" }}>
                <Clock size={14} /> 12m 04s
              </div>
            </div>
            <h3 style={{ fontWeight: "700", fontSize: "16px" }}>Premium {i % 2 === 0 ? 'Dinner' : 'Lunch'} Pack</h3>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>Grand Heritage Cafe</p>
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontWeight: "700", color: "#10b981" }}>₹120 <span style={{ textDecoration: "line-through", fontWeight: "400", color: "#9ca3af" }}>₹450</span></p>
              <button style={{ background: "#10b981", color: "white", padding: "5px 15px", borderRadius: "15px", border: "none", fontWeight: "700", cursor: "pointer" }}>Place Bid</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- HOTEL DASHBOARD ---
const HotelDashboard = ({ user, onLogout }) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", expiry: "" });

  const handleAddItem = () => {
    if (newItem.name && newItem.expiry) {
      setItems([...items, newItem]);
      setNewItem({ name: "", expiry: "" });
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6", padding: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "900" }}>{user.name}</h2>
        <button onClick={onLogout} style={{ background: "#d1d5db", border: "none", padding: "10px", borderRadius: "10px", cursor: "pointer" }}>
          <LogOut size={20} />
        </button>
      </div>

      <div style={{ background: "white", padding: "20px", borderRadius: "20px", maxWidth: "400px", marginBottom: "20px" }}>
        <h3 style={{ fontWeight: "700", marginBottom: "10px" }}>Add Surplus Item</h3>
        <input placeholder="Item Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "15px", border: "1px solid #e5e7eb", marginBottom: "10px" }} />
        <input placeholder="Expiry Time" value={newItem.expiry} onChange={e => setNewItem({ ...newItem, expiry: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "15px", border: "1px solid #e5e7eb", marginBottom: "10px" }} />
        <button onClick={handleAddItem} style={{ width: "100%", padding: "10px", borderRadius: "25px", border: "none", background: "#10b981", color: "white", fontWeight: "700", cursor: "pointer" }}>Add Item</button>
      </div>

      <div>
        <h3 style={{ fontWeight: "700", marginBottom: "10px" }}>Your Items</h3>
        {items.length === 0 ? <p style={{ color: "#6b7280" }}>No items added yet</p> : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {items.map((item, idx) => (
              <li key={idx} style={{ background: "white", padding: "10px 15px", borderRadius: "15px", marginBottom: "10px", display: "flex", justifyContent: "space-between", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                <span>{item.name}</span>
                <span style={{ color: "#6b7280" }}>{item.expiry}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [view, setView] = useState("landing");
  const [currentUser, setCurrentUser] = useState(null);

  const handleRegisterSuccess = (role, name) => {
    const user = { role, name };
    setCurrentUser(user);
    setView(role === "hotel" ? "dashboard-hotel" : "dashboard-user");
  };

  const handleLogin = (role, name) => {
    const user = { role, name };
    setCurrentUser(user);
    setView(role === "hotel" ? "dashboard-hotel" : "dashboard-user");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView("landing");
  };

  return (
    <div style={{ fontFamily: "sans-serif", color: "#111827" }}>
      {!currentUser && (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px", background: "white", borderBottom: "1px solid #e5e7eb" }}>
          <div onClick={() => setView("landing")} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
            <Leaf size={28} color="#10b981" />
            <span style={{ fontWeight: "900", fontSize: "24px" }}>SaveTheServe</span>
          </div>
          <div>
            <button onClick={() => setView("login")} style={{ background: "none", border: "none", color: "#111827", fontWeight: "700", cursor: "pointer" }}>Login</button>
          </div>
        </nav>
      )}

      {view === "landing" && <LandingPage onNavigate={setView} />}
      {view === "register-user" && <RegistrationView type="user" onRegisterSuccess={handleRegisterSuccess} onBack={() => setView("landing")} />}
      {view === "register-hotel" && <RegistrationView type="hotel" onRegisterSuccess={handleRegisterSuccess} onBack={() => setView("landing")} />}
      {view === "login" && <LoginView onLogin={handleLogin} onBack={() => setView("landing")} />}
      {view === "dashboard-user" && currentUser && <UserDashboard user={currentUser} onLogout={handleLogout} />}
      {view === "dashboard-hotel" && currentUser && <HotelDashboard user={currentUser} onLogout={handleLogout} />}
    </div>
  );
}