import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const ref = useRef();
  useEffect(() => {
    // close the menu when clicked outside
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav
      ref={ref}
      className={`${isOpen ? "open" : "close"}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="inner-layout">
        <div className="row">
          <div className="menu cross menu--1">
            <label>
              <input
                onChange={(e) => setIsOpen(e.target.checked)}
                checked={isOpen}
                type="checkbox"
                role="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
              />
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="30" />
                <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                <path className="line--2" d="M0 50h70" />
                <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
              </svg>
            </label>
          </div>
          <span className="logo">My Gallery</span>
        </div>
        <ul>
          <li onClick={() => setIsOpen(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a href="#gallery">Gallery</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
