import React, { Component } from 'react'
import Card from './Card/Card'
import './ProductsFirstScreen.css'

export default class ProductsFirstScreen extends Component {
	render() {
		return (
			<div className='range'>
				<div className="range__title">
					<h2>Ассортимент</h2>
				</div>
				<div className="range__cards">
					<Card />
				</div>
			</div>
		)
	}
}
