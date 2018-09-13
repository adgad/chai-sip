import React from 'react'
import Helmet from 'react-helmet'

import Logo from './Logo'
import './all.sass'

const TemplateWrapper = ({ image, tagline, children }) => (
  <div>
    <Helmet title="Chai Sip" />
    <div className="grid">
      <div
        className="full-width-image-container margin-top-0"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="content">
        <Logo tagline={tagline}/>
        {children}
      </div>

    </div>
  </div>
)

export default TemplateWrapper
