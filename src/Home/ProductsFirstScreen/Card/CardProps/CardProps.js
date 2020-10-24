import React from 'react'
import './CardProps.css'


function CardProps(props){
	return(
		<div className='card'>
			<div className="card__number">
				<h2>{props.number}</h2>
			</div>
			<div className="card__img">
				<img src={props.image} alt="card"/>
			</div>
			<div className="card__title">
				<h4>{props.title}</h4>
			</div>
			<div className="card__price">
				<span>{props.price}</span>
				<p>грн</p>
			</div>
			<button className='card__button'>Купить</button>
		</div>
	)
}
export default CardProps