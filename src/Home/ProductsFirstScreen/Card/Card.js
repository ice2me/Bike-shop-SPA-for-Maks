import React, { Component } from 'react'
import './Card.css'
import CardProps from './CardProps/CardProps'


export default class Card extends Component {
	render() {
		
		return (
			<>
				{stateCard.map(item =>
					<CardProps
						number={item.number}
						image={item.image}
						title={item.title}
						price={item.price}
						key={item.key}
					/>
				)}
			</>
		)
	}
}


const stateCard = [
	{
		"number": "bike 001",
		'title' : 'Lorem ipsum dolor sit amet.',
		'price' : '1000',
		'image': '../../../Images/bikeOne.jpg',
		'key': '00001'
	},
	{
		"number": "bike 002",
		'title' : 'Lorem ipsum dolor sit amet consectetur adipisicing',
		'price' : '2000',
		'image': '../../../Images/bikeTwo.jpg',
		'key': '00002'
	},
	{
		"number": "bike 003",
		'title' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.',
		'price' : '3000',
		'image': '../../../Images/bikeThree.jpg',
		'key': '00003'
	},
	{
		"number": "bike 004",
		'title' : 'Lorem ipsum dolor sit amet.',
		'price' : '4000',
		'image': '../../../Images/helmet.jpg',
		'key': '00004'
	},
	{
		"number": "bike 005",
		'title' : 'Lorem ipsum dolor sit amet consectetur adipisicing',
		'price' : '5000',
		'image': '../../../Images/link.jpg',
		'key': '00005'
	},
	{
		"number": "bike 006",
		'title' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.',
		'price' : '6000',
		'image': '../../../Images/speedometr.jpg',
		'key': '00006'
	},
	{
		"number": "bike 007",
		'title' : 'Lorem ipsum dolor sit amet.',
		'price' : '7000',
		'image': '../../../Images/stars.jpg',
		'key': '00007'
	},
	{
		"number": "bike 008",
		'title' : 'Lorem ipsum dolor sit amet consectetur adipisicing',
		'price' : '8000',
		'image': '../../../Images/tire.jpg',
		'key': '00008'
	},
	{
		"number": "bike 009",
		'title' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.',
		'price' : '9000',
		'image': '../../../Images/triger.jpg',
		'key': '00009'
	},
	{
		"number": "bike 010",
		'title' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.',
		'price' : '10000',
		'image': '../../../Images/triger.jpg',
		'key': '00010'
	},
	{
		"number": "bike 010",
		'title' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.',
		'price' : '10000',
		'image': '../../../Images/triger.jpg',
		'key': '00011'
	},
]