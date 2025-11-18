import { Link } from "react-router-dom";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2 style={{ margin: 0, color: "#007bff" }}>ATOMIX</h2>
      </div>

      <div>
        <Link to="/">Home</Link>

        {isLoggedIn ? (
          <>
            <Link to="/dashboard/profile">Dashboard</Link>
            <button
              onClick={() => setIsLoggedIn(false)}
              style={{
                background: "red",
                color: "white",
                padding: "6px 10px",
                borderRadius: "5px",
                border: "none",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
