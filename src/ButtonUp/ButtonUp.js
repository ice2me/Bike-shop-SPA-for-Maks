import React, { Component } from 'react'
import './ButtonUp.css'

export default class ButtonUp extends Component {
	buttonUp(){
		window.scrollTo(0,0)
	}
	
	render() {
		window.addEventListener('scroll', () => {
			if(window.pageYOffset >= 600){
				document.querySelector('.button__up').style.display = 'block'
			}else{
				document.querySelector('.button__up').style.display = 'none'
			}
		})
		return (
			<div className='button__up'>
				<button className='button__up-button' title='подняться вверх' onClick={this.buttonUp}>
				<svg width="50px" height="50px" viewBox="0 0 25 25">
					<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-2v-5l-5 5v-3h-6v-4h6v-3l5 5v-5h2v10z"/>
				</svg>
				</button>
			</div>
		)
	}
}
