import { Link } from "react-router-dom";
import "../CSS/menu.css";

function Menu() {
  return (
    <>
      <div style={{ display: "inline-block" }}>
        <nav className="navbar navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuContent"
            aria-controls="menuContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="collapse menu" id="menuContent">
          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
