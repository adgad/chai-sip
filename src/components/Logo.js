import React from 'react'

import 'logo.sass'

const Logo = ({ tagline }) => (
	<div className="logo">
		<h1 className="title visually-hidden">Chai Sip</h1>
		<a className="logo-image" href="/" aria-hidden>
			<img className="logo-image" src="/img/logo.jpeg" alt=""/>
		</a>
		<div className="logo-tagline">
			<span class="logo-tagline-text">{tagline}</span>
		</div>
	</div>
)

export default Logo;
