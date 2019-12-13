import React, { Component } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = { date: props.date };
	}

	componentDidMount() {
		this.timerID = setInterval(() => {
			if (this.props.run) {
				this.setState({
					date: new Date()
				});
			}
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	displayTime() {
		return (
			<div>{this.state.date.toLocaleTimeString()}</div>
		);
	}

	displayMessage() {
		return (
			<div>
				Clock is halted
			</div>
		);
	}

	render() {
		if (this.props.run)
			return this.displayTime();
		else
			return this.displayMessage();
	}
}
export default Clock;
