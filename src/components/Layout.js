import React from 'react'
import Helmet from 'react-helmet'

import Logo from './Logo'
import './all.sass'

const TemplateWrapper = ({ image, tagline, children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>Chai Sip</title>
      <link rel="shortcut icon" type="image/png" href="/img/favicon.png"/>
      <meta charSet="utf-8" />
      <meta name="description" value="Chai Sip brings a richer tea experience for events events in London and the UK" />
    </Helmet>
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
