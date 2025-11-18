export default function Profile() {
  return (
    <div>
      <h2>👤 User Profile</h2>
      <img
        src="https://picsum.photos/seed/userpic/200/200"
        style={{ borderRadius: "50%", marginTop: "20px" }}
      />
      <p style={{ marginTop: "20px", fontSize: "17px" }}>
        Welcome to your profile panel.  
        Here you can update your personal information, profile photo,  
        contact details, and manage account security.
      </p>
    </div>
  );
}
