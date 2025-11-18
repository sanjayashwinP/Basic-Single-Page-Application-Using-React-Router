export default function Notifications() {
  return (
    <div>
      <h2>🔔 Recent Notifications</h2>

      <p style={{ marginTop: "10px" }}>
        Here are the latest updates based on your account activity:
      </p>

      <ul style={{ fontSize: "17px", marginTop: "15px" }}>
        <li>✔ Your password was successfully updated.</li>
        <li>✔ New login detected from Windows Chrome.</li>
        <li>✔ Profile photo updated.</li>
        <li>✔ You have 2 unread system messages.</li>
      </ul>

      <img
        src="https://picsum.photos/seed/alerts/400/220"
        style={{ marginTop: "20px", borderRadius: "10px" }}
      />
    </div>
  );
}
