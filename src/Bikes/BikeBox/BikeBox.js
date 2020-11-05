import React, { Component } from 'react'
import './BikeBox.css'
import BikeCard from './BikeCard/BikeCard'


export default class BikeBox extends Component {
	render() {
		return (
			<div className='bike__box-cards'>
				{bikeBoxCollection.map(item =>
					<BikeCard
						name={item.name}
						img={item.img}
						title={item.title}
						price={item.price}
						number={item.number}
						key={item.key}
					/>
				)}
			</div>
		)
	}
}


const bikeBoxCollection = [
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/bikeOne.jpg',
		'price' : '1000',
		'key': '000 001',
		'value': '1111',
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/bikeTwo.jpg',
		'price' : '1000',
		'key': '000 002',
		'value': '2222',
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/bikethree.jpg',
		'price' : '1000',
		'key': '000 003',
		'value': '3333',
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/bikeOne.jpg',
		'price' : '1000',
		'key': '000 004',
		'value': '4444',
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/bikeOne.jpg',
		'price' : '1000',
		'key': '000 005',
		'value': '5555',
	},
]