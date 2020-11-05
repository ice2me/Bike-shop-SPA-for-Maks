import React, { Component } from 'react'
import './SparesBox.css'
import SparesCard from './SparesCard/SparesCard'


export default class SparesBox extends Component {
	render() {
		return (
			<div className='spares__box-cards'>
				{sparesBoxCollection.map(item =>
					<SparesCard
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


const sparesBoxCollection = [
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/link.jpg',
		'price' : '1000',
		'key': '000 001'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/link.jpg',
		'price' : '1000',
		'key': '000 002'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/link.jpg',
		'price' : '1000',
		'key': '000 003'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/link.jpg',
		'price' : '1000',
		'key': '000 004'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/link.jpg',
		'price' : '1000',
		'key': '000 005'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/link.jpg',
		'price' : '1000',
		'key': '000 006'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/link.jpg',
		'price' : '1000',
		'key': '000 007'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/link.jpg',
		'price' : '1000',
		'key': '000 008'
	},
	{
		"name": "АКСЕССУАРЫ 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'img': '../../Images/link.jpg',
		'price' : '1000',
		'key': '000 009'
	},
]