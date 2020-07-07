import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="main-header">
    <div className="logo">
      <a href="#">LOGO</a>
    </div>

    {/* <a href="#portfolio">Portfolio</a>
    <Link to="contact_us">Contact Us</Link> */}
    <input type="checkbox" class="menu-btn" id="menu-btn" />

    <label htmlFor="menu-btn" className="menu-icon">
      <span className="menu-icon__line"></span>
    </label>
    <ul className="nav-links">
      <li className="nav-link">
        <a href="#">About</a>
      </li>
      <li className="nav-link">
        <a href="#">Portfolio</a>
      </li>
      <li className="nav-link">
        <a href="#">Services</a>
      </li>
      <li className="nav-link">
        <a href="#">Contact</a>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
