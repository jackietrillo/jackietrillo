import { Link } from "react-router-dom";
import "../CSS/nav.css";

const Nav = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className={props.pageName == "Home" ? "disabled" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Skills"
              className={props.pageName == "Skills" ? "disabled" : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/Resume"
              className={props.pageName == "Resume" ? "disabled" : ""}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/Portfolio"
              className={props.pageName == "Portfolio" ? "disabled" : ""}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className={props.pageName == "About" ? "disabled" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className={props.pageName == "Contact" ? "disabled" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
