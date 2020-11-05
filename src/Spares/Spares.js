import React, { Component } from 'react'
import SparesBox from './SparesBox/SparesBox'
import './Spares.css'

export default class Spares extends Component {
	render() {
		return (
			<div className='spares__page'>
				<h1>
					Запчасти
				</h1>
				<SparesBox />
			</div>
		)
	}
}
