import React from 'react'
import './SparesCard.css'


export default function SparesCard(props){
		return (
			<div className='spares-card'>
				<div className="spares-card__number">
					<h2>{props.name}</h2>
				</div>
				<div className="spares-card__img">
					<img src={props.img} alt="spares-card"/>
				</div>
				<div className="spares-card__title">
					<h4>{props.title}</h4>
				</div>
				<div className="spares-card__price">
					<span>{props.price}</span>
					<p>грн</p>
				</div>
				<button className='spares-card__button'>Купить</button>
			</div>
		)
}
