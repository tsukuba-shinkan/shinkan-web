import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <img
          src="https://drive.google.com/uc?id=1ReaOXbZz2mHy2CKZ7cQONvot6vp3S02m"
          alt={`筑波大学`}
          id={`headerLogo`}
        />
        <span>新歓Web</span>
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
