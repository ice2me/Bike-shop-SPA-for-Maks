import React, { Component } from 'react'
import './Accessories.css'
import AccessoriesBox from './AccessoriesBox/AccessoriesBox'

export default class Accessories extends Component {
	render() {
		return (
			<div className='accessories__page'>
				<div className='accessories__page-title'>
					<h1>
						Аксессуары
					</h1>
					<AccessoriesBox />
				</div>
			</div>
		)
	}
}
