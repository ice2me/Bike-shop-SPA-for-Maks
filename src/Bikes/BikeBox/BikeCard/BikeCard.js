import React from 'react'
import './BikeCard.css'


export default function BikeCard(props){
		return (
			<div className='bike-card'>
				<div className="bike-card__number">
					<h2>{props.name}</h2>
				</div>
				<div className="bike-card__img">
					<img src={props.img} alt="bike-card"/>
				</div>
				<div className="bike-card__title">
					<h4>{props.title}</h4>
				</div>
				<div className="bike-card__price">
					<span>{props.price}</span>
					<p>грн</p>
				</div>
				<button className='bike-card__button' value={props.value}>Купить</button>
			</div>
		)
}
