import React, {Component} from 'react'
import './mystyle.css'

class SkillDiv extends Component {
	constructor(props){
		super(props)

		this.state = {
			isHovered: false,
			isHovered2: false,
			isHovered3: false,
			isHovered4: false
		}
		this.toggleHover = this.toggleHover.bind(this)
		this.toggleHover2 = this.toggleHover2.bind(this)
		this.toggleHover3 = this.toggleHover3.bind(this)
		this.toggleHover4 = this.toggleHover4.bind(this)
	}

	toggleHover(){
		this.setState({
			isHovered: this.state.isHovered ? false : true
		})
	}
	toggleHover2(){
		this.setState({
			isHovered2: this.state.isHovered2 ? false : true
		})
	}
	toggleHover3(){
		this.setState({
			isHovered3: this.state.isHovered3 ? false : true
		})
	}
	toggleHover4(){
		this.setState({
			isHovered4: this.state.isHovered4 ? false : true
		})
	}

	render(){

		let disp = this.state.isHovered ? <p> A Simple Flutter chat android application. Flutter apps works both in android and IOS.</p> : <h1>Flutter</h1>
		let disp2 = this.state.isHovered2 ? <p>A contest Reminder desktop Application.It can dynamically fetch the upcoming contest list from various coding platform like codechef,codeforces,atcoder and hackerearth.</p> : <h1>Kivy</h1>
		let disp3 = this.state.isHovered3 ? <p>A Simple chat room client-server based application.Multiple users can chat with each other at the same time.</p> : <h1>NodeJS</h1>
		let disp4 = this.state.isHovered4 ? <p>A React Portfolio website with dynamica content rendering with firebase server</p> : <h1>React</h1>
		return(
			<div>
				<div class="skills" id="work">
					<h2><mark><i>SKILLS AND PROJECTS</i></mark></h2>
					<br/><br/><br/><br/>
					<div class="row1">
						<div class="col1">
							<div class="card" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
								<a href="https://github.com/underworld123/Flutter_chat_app">
									{disp}
								</a>
							</div>
						</div>
						<div class="col2">
							<div class="card" onMouseEnter={this.toggleHover2} onMouseLeave={this.toggleHover2}>
								<a href="https://github.com/underworld123/Contest-REMINDER">
									{disp2}
								</a>
							</div>
						</div>
					</div>
					<br/><br/><br/><br/><br/>
					<div class="row2">
						<div class="col1">
							<div class="card" onMouseEnter={this.toggleHover3} onMouseLeave={this.toggleHover3}>
								<a href="https://github.com/underworld123/Railway-managment-system">
									{disp3}							
								</a>
							</div>
						</div>
						<div class="col2">
							<div class="card" onMouseEnter={this.toggleHover4} onMouseLeave={this.toggleHover4}>
								<a href="https://github.com/underworld123/kivy_login_gui">
									{disp4}
								</a>
							</div>
						</div>
					</div>
					<br/><br/><br/><br/><br/>
				</div>
			</div>
		)
	}
}

export default SkillDiv
