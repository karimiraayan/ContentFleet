import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${isOpen ? "open" : "close"}`}>
      <div className="inner-layout">
        <div className="row-1">
          <div className="menu cross menu--1">
            <label>
              <input
                onChange={(e) => setIsOpen(e.target.checked)}
                checked={isOpen}
                type="checkbox"
              />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="30" />
                <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                <path className="line--2" d="M0 50h70" />
                <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
              </svg>
            </label>
          </div>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>

        </ul>
      </div>
    </nav>
  );
}
