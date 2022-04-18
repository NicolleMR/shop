import { Link } from "react-router-dom";
import "./header.css";

const Header = () => (
  <header className="header">
    <h1 className="header__title">SHOP</h1>
    <nav className="header__nav">
      <ul className="header__links">
        <li className="header__link">
          <Link to="/">Home</Link>
        </li>
        <li className="header__link">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;