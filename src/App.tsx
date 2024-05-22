import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <nav className={`nav ${menuOpen ? "MenuOpen" : ""}`}>
        <div className="menu">
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8L8 24"
                  stroke="#18191F"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 8L24 24"
                  stroke="#18191F"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20"
                  stroke="#18191F"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 18H20"
                  stroke="#18191F"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 6H20"
                  stroke="#18191F"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <ul className="nav-menu">
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="nav-link"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </button>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nav-link">About</div>
            {activeMenu === "about" && (
              <ul className="dropdown">
                <li className="dropdown-item">
                  <button
                    onClick={() => (window.location.href = "/about/team")}
                  >
                    Our Team
                  </button>
                </li>
                <li className="dropdown-item">
                  <button
                    onClick={() => (window.location.href = "/about/company")}
                  >
                    Company
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nav-link">Contact Us</div>
            {activeMenu === "contact" && (
              <ul className="dropdown">
                <li className="dropdown-item">
                  <a href="www.facebook.com" target="_blank">
                    Facebook
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="www.instagram.com" target="_blank">
                    Instagram
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <div className="content"></div>
    </div>
  );
};

export default App;
