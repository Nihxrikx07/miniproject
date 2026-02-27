import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>Save The Serve</Link>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "20px 40px",
    background: "#111827",
    color: "white",
  },
  logo: {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
  }
};

export default Navbar;