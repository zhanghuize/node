import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/home';
class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/home' component={Home}></Route>
					<Redirect from='/' to='/home' />
				</Switch>
			</BrowserRouter>
		);
	}
}
export default Router;
