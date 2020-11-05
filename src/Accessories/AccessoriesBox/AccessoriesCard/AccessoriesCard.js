import React from 'react'
import './AccessoriesCard.css'


export default function AccessoriesCard(props){
		return (
			<div className='accessories-card'>
				<div className="accessories-card__number">
					<h2>{props.name}</h2>
				</div>
				<div className="accessories-card__img">
					<img src={props.img} alt="accessories-card"/>
				</div>
				<div className="accessories-card__title">
					<h4>{props.title}</h4>
				</div>
				<div className="accessories-card__price">
					<span>{props.price}</span>
					<p>грн</p>
				</div>
				<button className='accessories-card__button'>Купить</button>
			</div>
		)
}
