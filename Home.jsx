function Home() {
  const role = localStorage.getItem("role");

  return (
    <div style={styles.container}>
      {role === "hotel" ? (
        <div>
          <h2>Hotel Dashboard 🏨</h2>
          <button style={styles.button}>Upload Food</button>
        </div>
      ) : (
        <div>
          <h2>User Dashboard 👤</h2>
          <button style={styles.button}>Browse Food</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "60px",
    textAlign: "center",
  },
  button: {
    padding: "12px 20px",
    background: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "8px",
    marginTop: "20px",
  }
};

export default Home;