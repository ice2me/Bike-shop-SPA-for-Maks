import React from 'react'
import './App.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ButtonUp from '../ButtonUp/ButtonUp'

function App() {
	// window.addEventListener('click', (e) => {
	// 	let but = document.getElementsByTagName('button').value
	// 	console.log(e.target)
	// })
	return (
		<div className="wrapper">
			<Header/>
			<ButtonUp/>
			<Footer />
		</div>
	)
}

export default App
