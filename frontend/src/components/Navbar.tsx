import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>MILO</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/podcast">Podcast</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}