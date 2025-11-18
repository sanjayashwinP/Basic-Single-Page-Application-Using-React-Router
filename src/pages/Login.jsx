export default function Login({ setIsLoggedIn }) {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to SmartOffice</h2>
        <p style={{ color: "#666" }}>Access your personal dashboard</p>

        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />

        <button 
          onClick={() => setIsLoggedIn(true)}
          className="btn-primary"
          style={{ width: "100%", marginTop: "10px" }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
