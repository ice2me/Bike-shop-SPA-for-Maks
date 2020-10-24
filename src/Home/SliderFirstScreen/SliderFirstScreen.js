import React, { Component } from 'react'
import './SliderFirstScreen.css'
import photoOne from'../../Images/bikeSlider(1).jpg'
import photoTwo from'../../Images/bikeSlider(2).jpg'
import photoThree from'../../Images/bikeSlider(3).jpg'


export default class SliderFirstScreen extends Component {
	
	render() {
		document.addEventListener("DOMContentLoaded", function() {
			const slides = document.querySelectorAll('.slider-img')
			let currentSlide = 0
			setInterval(nextSlide, 5000)
			function nextSlide() {
				slides[currentSlide].className = 'slider-img'
				currentSlide = (currentSlide + 1) % slides.length
				slides[currentSlide].className = 'slider-img action-img'
			}
		})
		return (
			<div className='slider-top'>
				<div className="slider-top__colection">
					<img src={photoOne} alt="slider" className="slider-img"/>
					<img src={photoTwo} alt="slider" className="slider-img"/>
					<img src={photoThree} alt="slider" className="slider-img action-img"/>
				</div>
			</div>
		)
	}
}
