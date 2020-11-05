import React, { Component } from 'react'
import './AccessoriesBox.css'
import AccessoriesCard from './AccessoriesCard/AccessoriesCard'

export default class AccessoriesBox extends Component {
	render() {
		return (
			<div className='accessories-cards'>
				{AccessoriesCollection.map(item =>
					<AccessoriesCard
						name={item.name}
						img={item.img}
						title={item.title}
						price={item.price}
						key={item.key}
					/>
				)}
			</div>
		)
	}
}


const AccessoriesCollection = [
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/speedometr.jpg',
		'price' : '1000',
		'key': '000 001'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/speedometr.jpg',
		'price' : '1000',
		'key': '000 002'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/speedometr.jpg',
		'price' : '1000',
		'key': '000 003'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/speedometr.jpg',
		'price' : '1000',
		'key': '000 004'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/speedometr.jpg',
		'price' : '1000',
		'key': '000 005'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/speedometr.jpg',
		'price' : '1000',
		'key': '000 006'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/speedometr.jpg',
		'price' : '1000',
		'key': '000 007'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/speedometr.jpg',
		'price' : '1000',
		'key': '000 008'
	},
]