import React, { Component } from 'react'
import './Card.css'
import CardProps from './CardProps/CardProps'

import img1 from '../../../Images/bikeOne.jpg'
import img2 from '../../../Images/bikeTwo.jpg'
import img3 from '../../../Images/bikeThree.jpg'
import img4 from '../../../Images/helmet.jpg'
import img5 from '../../../Images/link.jpg'
import img6 from '../../../Images/speedometr.jpg'
import img7 from '../../../Images/stars.jpg'
import img8 from '../../../Images/tire.jpg'
import img9 from '../../../Images/triger.jpg'

export default class Card extends Component {
	constructor(props){
		super(props)
		this.state = {
			number: {
				'001' : 'bike 001',
				'002' : 'bike 002',
				'003' : 'bike 003',
				'004' : 'bike 004',
				'005' : 'bike 005',
				'006' : 'bike 006',
				'007' : 'bike 007',
				'008' : 'bike 008',
				'009' : 'bike 009',
				'010' : 'bike 010',
			},
			title: {
				'001' : 'Lorem ipsum dolor sit amet.',
				'002' : 'Lorem ipsum dolor sit amet consectetur adipisicing',
				'003' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.',
				'004' : 'Lorem ipsum dolor sit amet.',
				'005' : 'Lorem ipsum dolor sit amet consectetur adipisicing',
				'006' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.',
				'007' : 'Lorem ipsum dolor sit amet.',
				'008' : 'Lorem ipsum dolor sit amet consectetur adipisicing',
				'009' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.',
				'010' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.'
			},
			price: {
				'001' : '1000',
				'002' : '2000',
				'003' : '3000',
				'004' : '4000',
				'005' : '5000',
				'006' : '6000',
				'007' : '7000',
				'008' : '8000',
				'009' : '9000',
				'010' : '10000',
			}
		}
	}
	render() {
		return (
			<div className='range__cards' onClick={this.clickOnCard}>
				<CardProps
					id='bikeOne'
					number={this.state.number['001']}
					src={img1}
					title={this.state.title['001']}
					price={this.state.price['001']}
				/>
				<CardProps
					id='bikeTwo'
					number={this.state.number['002']}
					src={img2}
					title={this.state.title['002']}
					price={this.state.price['002']}
				/>
				<CardProps
					id='bikeThree'
					number={this.state.number['003']}
					src={img3}
					title={this.state.title['003']}
					price={this.state.price['003']}
				/>
				<CardProps
					number={this.state.number['004']}
					src={img4}
					title={this.state.title['004']}
					price={this.state.price['004']}
				/>
				<CardProps
					number={this.state.number['005']}
					src={img5}
					title={this.state.title['005']}
					price={this.state.price['005']}
				/>
				<CardProps
					number={this.state.number['006']}
					src={img6}
					title={this.state.title['006']}
					price={this.state.price['006']}
				/>
				<CardProps
					number={this.state.number['007']}
					src={img7}
					title={this.state.title['007']}
					price={this.state.price['007']}
				/>
				<CardProps
					number={this.state.number['008']}
					src={img8}
					title={this.state.title['008']}
					price={this.state.price['008']}
				/>
				<CardProps
					number={this.state.number['009']}
					src={img9}
					title={this.state.title['009']}
					price={this.state.price['009']}
				/>
				<CardProps
					number={this.state.number['010']}
					src={img9}
					title={this.state.title['010']}
					price={this.state.price['010']}
				/>
			</div>
		)
	}
}
