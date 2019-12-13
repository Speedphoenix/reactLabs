import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import MainChat from './MainChat.js';
import MainClock from './MainClock.js';
import Btstraptest from './Btstraptest.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { chat: [] };
		this.handleSend = this.handleSend.bind(this);
	}

	handleSend(name, text) {
		this.setState({
			chat: this.state.chat.concat(<p key={this.state.chat.length}>{name}: {text}</p>)
		});
	}

	displayChat() {
		// Currently doing this
		//toShow = this.state.chat.map((item
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/clock">Clock</Link></li>
							<li><Link to="/btstraptest">Btstraptest</Link></li>
						</ul>

						<Route exact path="/" component={() => <MainChat/>}/>
						<Route exact path="/clock" component={() => <MainClock/>}/>
						<Route exact path="/btstraptest" component={() => <Btstraptest/>}/>
						<Route exact path="/" component={() => <p>haha</p>}/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
