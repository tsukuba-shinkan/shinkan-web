import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Image from "../components/image"
import ShinkanWebLogo from "./shinkanweblogo"
import SchoolLogo from "./schoollogo"

const Header = () => (
  <header>
    <div className="headerWrapper">
      <Link to="/">
        <ShinkanWebLogo />
        <SchoolLogo />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
