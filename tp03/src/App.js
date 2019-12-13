import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat/Chat.js';

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
			{/*
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			*/}
				<div>{this.state.chat}</div>
				<div style={{float: "left"}}>
					<Chat onSend={this.handleSend} name="Chat1" display={this.state.chat}/>
				</div>
				<div style={{float: "right"}}>
					<Chat onSend={this.handleSend} name="Chat2" display={this.state.chat}/>
				</div>
			</div>
		);
	}
}

export default App;
