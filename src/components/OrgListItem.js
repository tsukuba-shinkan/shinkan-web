import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import _LazyLoad, { forceCheck } from "react-lazyload"

import Fluid200 from "./Fluid200"

const OrgList = ({ org, onClick }) => (
  <li className="org-list__item" key={org.primaryKey}>
    <LazyLoad>
      <Link to={`/org/${org.primaryKey}`}>
        <figure className="org-list__item__poster">
          <Fluid200 url={org.posterImageUrls[0]} alt="" />
          <figcaption>
            <h2 className="org-list__item__name">{org.name}</h2>
            <p className="org-list__item__activity-introduce">
              {org.activityIntroduce.slice(0, 100) + "..."}
            </p>
          </figcaption>
        </figure>
      </Link>

      <div // スマホ用
        className="org-list__item__sp-caption"
        onClick={onClick}
      >
        <div className="org-list__item__sp-caption__name">{org.name}</div>
        <div className="org-list__item__sp-caption__activity-introduce">
          {org.activityIntroduce.slice(0, 100) + "..."}
        </div>
      </div>
    </LazyLoad>
  </li>
)

const LazyLoad = ({ children }) => {
  setTimeout(() => {
    forceCheck()
  }, 0)

  return (
    <_LazyLoad offset={200} once>
      {children}
    </_LazyLoad>
  )
}

OrgList.propTypes = {
  org: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

export default OrgList
