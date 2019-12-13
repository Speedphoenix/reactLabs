import React, { Component } from 'react';

class Chat extends Component {
	constructor(props) {
		super(props);
		this.displayChat = this.displayChat.bind(this);
		this.handleSend = this.handleSend.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			display: [],
			chat: ""
		};
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSend(event) {
		this.props.onSend(this.props.name, this.state.chat);
		this.setState({
			display: this.state.display.concat(this.state.chat),
			chat: ''
		});
	}

	displayChat() {
		let chat = this.state.display.map((item) => {
			return (<p key={this.state.display.length}>{item}</p>)
		});

		return (<div className="display">{chat}</div>);
	}

	render() {
		return (
			<div>
				{this.displayChat()}
				<div>
					<input type="text" name="chat" onChange={this.handleChange}
						value={this.state.chat}/>
					<button onClick={this.handleSend}>Envoyer</button>
				</div>
			</div>
		);
	}
}

export default Chat;
