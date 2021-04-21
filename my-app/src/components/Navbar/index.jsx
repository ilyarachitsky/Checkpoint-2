import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  useEffect (() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);




  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/brand-logo-small.jpg`}
              alt="brand"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/menu-icon.png`}
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/cross-icon.png`}
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
