import React from 'react'
import Helmet from 'react-helmet'

import Logo from './Logo'
import './all.sass'


import { SocialIcon } from 'react-social-icons';

const TemplateWrapper = ({ image, tagline, metaDescription, children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>ChaiSip</title>
      <link rel="icon" type="image/jpeg" href="/img/favicon.jpg"/>
      <meta charSet="utf-8" />
      <meta name="description" content={metaDescription} />
    </Helmet>
    <div className="grid">
      <div className="content">
        <Logo tagline={tagline}/>
        {children}
      </div>

      <div className="footer">
        <SocialIcon url="http://twitter.com/chai_sip" />
        <SocialIcon url="https://www.instagram.com/chai.sip/" />
      </div>

      <div
        className="full-width-image-container margin-top-0"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  </div>
)

export default TemplateWrapper
