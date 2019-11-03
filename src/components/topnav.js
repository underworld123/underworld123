import React from 'react'
import './mystyle.css'

function TopNav() {
	return(
		<div>
			<div className='topnav'>
			  <a className="active">Rishabh Pahwa</a>
			  <a className="inactive" href="#about">About</a>
			  <a className="inactive" href="#work">Work</a>
			  <a className="inactive" href="#about">Resume</a>
			</div>
		</div>
	)
}

export default TopNav
