import React from 'react';
import {Link} from 'react-router-dom';
// import css from '../src/stylesheets/about.css';

export default class About extends React.Component {
	render () {
		return (
			<div>
				<h1>About</h1>
			<Link to="/">
				<button id="home" className="btn btn-primary">Go Home</button>
			</Link>
			</div>
		)
	}
}