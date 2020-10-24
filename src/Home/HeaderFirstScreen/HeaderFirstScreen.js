import React, { Component } from 'react'
import './HeaderFirstScreen.css'
import SliderFirstScreen from '../SliderFirstScreen/SliderFirstScreen'
export default class HeaderFirstScreen extends Component {
	render() {
		return (
			<div className='top__title'>
				<SliderFirstScreen />
				<div className="top__title-name">
					<h1>Драйв</h1>
					<span>веломагазин</span>
				</div>
			</div>
		)
	}
}
