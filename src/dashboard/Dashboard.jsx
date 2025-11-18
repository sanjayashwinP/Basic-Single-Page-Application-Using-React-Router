import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h3>Dashboard Menu</h3>
        <Link to="profile">👤 Profile</Link>
        <Link to="settings">⚙️ Settings</Link>
        <Link to="notifications">🔔 Notifications</Link>
      </div>

      <div className="main-content">
        <h1>Welcome Back!</h1>
        <p>Your personalized dashboard gives you full control over your account.</p>

        <div className="card">
          <img src="https://picsum.photos/seed/profile/300/200" alt="Profile" />
          <h3>Profile</h3>
          <p>Update personal details and manage your identity.</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/seed/settings/300/200" alt="Settings" />
          <h3>Settings</h3>
          <p>Adjust system preferences, privacy and behavior.</p>
        </div>

        <div className="card">
          <img src="https://picsum.photos/seed/notifications/300/200" alt="Notifications" />
          <h3>Notifications</h3>
          <p>Stay up-to-date with system alerts and activities.</p>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
