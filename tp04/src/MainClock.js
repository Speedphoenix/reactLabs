import React, { Component } from 'react';
import './App.css';
import Clock from './Clock/Clock.js';

class MainClock extends Component {
	constructor(props) {
		super(props);

		this.state = { listClock: [] };
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		// this.start = this.start.bind(this);
		// this.stop = this.stop.bind(this);
	}

	start(index) {
		let clocks = this.state.listClock.slice();
		clocks[index].run = true;
		this.setState({listClock: clocks});
	}

	stop(index) {
		let clocks = this.state.listClock.slice();
		clocks[index].run = false;
		this.setState({listClock: clocks});
	}

	add() {
		this.setState({
			listClock: this.state.listClock.concat({ date: new Date(), run: true})
		});
	}

	remove() {
		this.setState({
			listClock: this.state.listClock.slice(0, -1)
		});
	}

	render() {
		return (
		<div className="MainClock">

			{this.displayClocks()}
			<Clock date={new Date()} run={this.state.running}/>
			<button onClick={this.add}>New</button>
			<button onClick={this.remove}>Delete</button>
		</div>
		);
	}

	displayClocks() {
		let listItems = this.state.listClock.map((clock, index) =>
			<li key={index}>
				<Clock date={clock.date} run={clock.run}/>
				<button onClick={() => {this.start(index)}}>Start</button>
				<button onClick={() => {this.stop(index)}}>Stop</button>
			</li>
		);

		return (<ul>{listItems}</ul>);
	}
}

export default MainClock;

