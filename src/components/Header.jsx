import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    // Remove login flag
    localStorage.removeItem("isLoggedIn");

    // Optional: remove user data (if you want full logout)
    // localStorage.removeItem("user");

    setOpen(false);

    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Brand */}
        <Link to="/" className="brand">
          <span className="brand-logo">🛍</span>
          <span className="brand-text">ShopSphere</span>
        </Link>

        {/* Navigation */}
        <nav className="nav-menu">

          <NavLink to="/" className="menu-link" end>
            Catalog
          </NavLink>

          <NavLink to="/about" className="menu-link">
            About
          </NavLink>

          <NavLink to="/cart" className="menu-link">
            Cart
          </NavLink>

          {/* Profile Section */}
          {user && (
            <div className="profile-section">
              <div
                className="profile-display"
                onClick={() => setOpen(!open)}
              >
                <div className="profile-avatar">
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <span className="profile-name">
                  {user.name}
                </span>
              </div>

              {open && (
                <div className="profile-dropdown">
                  <button onClick={() => navigate("/cart")}>
                    My Cart
                  </button>

                  <button onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;