import React from 'react'
import './mystyle.css'
import Gmail from './gmail-logo.png'
import Facebook from './facebook.png'
import Linkedin from './linkedin.png'

function BottomNav() {
	return(
		<div className="bottom-nav">
			<div>
				<h2 className="ax">CONTACT ME</h2>
				<a href="mailto:rishabh.pahwa1959@gmail.com" className="aa">
					<img src={Gmail}/>
				</a>
				<a href="https://www.linkedin.com/in/rishabh-pahwa-4b33a8172" className="ab">
					<img src={Linkedin}/>
				</a>
				<a href="https://www.facebook.com/rishabh.pahwa.792" className="ac">
					<img src={Facebook}/>
				</a>
			</div>
		</div>
	)
}

export default BottomNav
