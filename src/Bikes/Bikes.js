import React, { Component } from 'react'
import BikeBox from './BikeBox/BikeBox'
import './Bikes.css'

export default class Bikes extends Component {
	render() {
		return (
			<div className='bike__page'>
				<h1>
					Велосипеды
				</h1>
				<BikeBox />
			</div>
		)
	}
}
