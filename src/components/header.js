import { Link } from "gatsby"
import React from "react"
// import Image from "../components/image"
import ShinkanWebLogo from "./shinkanweblogo"
import SchoolLogo from "./schoollogo"

const Header = () => (
  <header className="site-header">
    <div>
      <Link to="/">
        <ShinkanWebLogo />
        <SchoolLogo />
      </Link>
    </div>
  </header>
)

export default Header
