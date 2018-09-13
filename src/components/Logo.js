import React from 'react'

import 'logo.sass'

const Logo = ({ data }) => (
	<div className="logo">
		<h1 className="title visually-hidden">Chai Sip</h1>
		<img className="logo-image" src="/img/logo.jpeg" alt=""/>
		<div className="logo-tagline">
			<span class="logo-tagline-text">Bring a richer tea experience to your next event.</span>
		</div>
	</div>
)

export default Logo;
