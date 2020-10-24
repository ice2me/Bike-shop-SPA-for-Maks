import React, { Component } from 'react'
import HeaderFirstScreen from './HeaderFirstScreen/HeaderFirstScreen'
import ProductsFirstScreen from './ProductsFirstScreen/ProductsFirstScreen'

export default class Home extends Component {
	render() {
		return (
			<div className='main'>
				<HeaderFirstScreen />
				<ProductsFirstScreen />
			</div>
		)
	}
}
