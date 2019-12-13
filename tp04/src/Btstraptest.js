import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Chat from './Chat/Chat.js';

class Btstraptest extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col>.col</Col>
						<Col>.col</Col>
						<Col>.col</Col>
						<Col>.col</Col>
					</Row>
					<Row>
						<Col xs="1">.col-1</Col>
						<Col xs="2">.col-2</Col>
						<Col xs="3">.col-3</Col>
						<Col xs="6">.col-6</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Btstraptest;
