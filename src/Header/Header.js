import React, { Component } from 'react'
import './Header.css'
import NavigationMenu from './NavigationMenu/NavigationMenu'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Bikes from '../Bikes/Bikes'
import Spares from '../Spares/Spares'
import Accessories from '../Accessories/Accessories'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import Home from '../Home/Home'



export default class Header extends Component {
	render() {
		return (
			<div className='top__menu'>
				<BurgerMenu />
				<NavigationMenu />
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/bikes" component={Bikes} />
						<Route exact path="/spares" component={Spares} />
						<Route exact path="/accessories" component={Accessories} />
					</Switch>
				</Router>
			</div>
		)
	}
}
