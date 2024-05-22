import React, { useState } from "react";
import "./App.css";

const App = () => {
  // const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMouseEnter = (menu: string) => {
    // setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    // setActiveMenu(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.getElementsByTagName("html").item(0)?.classList.toggle("MenuOpen");
  };

  return (
    <div className="App">
      <nav className="nav">
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
            // onMouseEnter={() => handleMouseEnter("home")}
            // onMouseLeave={handleMouseLeave}
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
            // onMouseEnter={() => handleMouseEnter("about")}
            // onMouseLeave={handleMouseLeave}
          >
            <div className="nav-link">About</div>
            <ul className="dropdown">
              <li className="dropdown-item">
                <button onClick={() => (window.location.href = "/about/team")}>
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
          </li>
          <li
            className="nav-item"
            // onMouseEnter={() => handleMouseEnter("contact")}
            // onMouseLeave={handleMouseLeave}
          >
            <div className="nav-link">Contact Us</div>
            <ul className="dropdown">
              <li className="dropdown-item">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <div className="link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                  </svg>
                </div>
              </li>
              <li className="dropdown-item">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <div className="link-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                  </svg>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="content"></div>
    </div>
  );
};

export default App;
