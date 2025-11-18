import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to SmartOffice Portal</h1>

      <p>
        SmartOffice is your all-in-one productivity dashboard.  
        Manage your profile, stay updated through notifications,  
        and customize your workspace with powerful settings.
      </p>

      <img 
        src="https://picsum.photos/seed/home/600/300"
        alt="Office Banner"
      />

      <br /><br />
      <Link to="/login">
        <button className="btn-primary">Get Started</button>
      </Link>
    </div>
  );
}
