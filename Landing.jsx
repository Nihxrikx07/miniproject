import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container hero">
      <h1>
        Stop Waste. <span>Save Your Serve.</span>
      </h1>
      <p>Connecting restaurants with surplus food to customers nearby.</p>

      <button className="button-primary" onClick={() => navigate("/login")}>
        Get Started
      </button>

      <button className="button-outline" onClick={() => navigate("/register")}>
        Partner With Us
      </button>
    </div>
  );
}

export default Landing;