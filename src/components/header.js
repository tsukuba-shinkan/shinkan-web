import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontWeight: `normal`,
          }}
        >
          <img
            src="https://drive.google.com/uc?id=1ReaOXbZz2mHy2CKZ7cQONvot6vp3S02m"
            alt={`筑波大学`}
            id={`headerLogo`}
          />
          <span>新歓Web</span>
        </Link>
      </h1>
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
