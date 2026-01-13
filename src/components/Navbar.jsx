import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./Navbar.css"; 

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mi App</div>
      <div className="navbar-auth">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
};

export default Navbar; // <--- ESTO ES VITAL