import React, { Component } from 'react';
var firebase = require('firebase/app');
var uuid = require('uuid');
// Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC9wL3a-P4h6GuTWmntl466R_edXeBHW1c",
    authDomain: "react-survey-2ea23.firebaseapp.com",
    databaseURL: "https://react-survey-2ea23.firebaseio.com",
    projectId: "react-survey-2ea23",
    storageBucket: "react-survey-2ea23.appspot.com",
    messagingSenderId: "567318517955",
    appId: "1:567318517955:web:718e93927d58b01cf9aa76",
    measurementId: "G-SWG8KS536K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default class Survey extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uid: uuid.v1(),
			studentName: 'Ahmad',
			answers: { 
				a1: '',
				a2: '',
				a3: ''
			},
			isSubmitted: false
		};
		this.nameSubmit = this.nameSubmit.bind(this);
		this.answerSelect = this.answerSelect.bind(this);
		this.questionSubmit = this.questionSubmit.bind(this);
	}
	nameSubmit (event) { 
		var studentName = this.refs.name.value;
		this.setState({ studentName: studentName }, function(){ 
			console.log(this.state);
		});
	}
	answerSelect (event) {
		var answers = this.state.answers;
		if (event.target.name === 'a1') {
			answers.a1 = event.target.value;
		} else if (event.target.name === 'a2') {
			answers.a2 = event.target.value;
		} else if (event.target.name === 'a3') {
			answers.a3 = event.target.value;
		}
		this.setState({answers: answers}, function () {
			console.log(this.state);
		})
	}
	questionSubmit () { 
		// TODO
	}
	render() {
		var studentName;
		var questions;
		if (this.state.studentName ==='' && this.state.isSubmitted ===false) {
			studentName = <div>
				<h2>Let us Kknow your Name:</h2>
				<form onSubmit={this.nameSubmit}>
					<input className="stuName" type="text" placeholder="Enter Your Name" ref="name" />
				</form>
			</div>;
			questions = ''
		} else if (this.state.studentName !=='' && this.state.isSubmitted ===false) {
			studentName = <h1>Welcome to E-Survey, {this.state.studentName}</h1>;
			questions = <div>
			<h2>Here are some Questions we'd like you to answer</h2>
				<form onSubmit={this.questionSubmit}>
					<div className="card">
						<label>What kind of courses do you like?</label> <br />
						<input type="radio" name="a1" value="Tech" onChange={ this.answerSelect } /> Technology
						<input type="radio" name="a1" value="Design" onChange={ this.answerSelect } /> Design
						<input type="radio" name="a1" value="SEO" onChange={ this.answerSelect } /> S.E.O
					</div>
					<div className="card">
						<label>Are you a Student or Trainer ?</label> <br />
						<input type="radio" name="a2" value="student" onChange={ this.answerSelect } /> Student
						<input type="radio" name="a2" value="trainer" onChange={ this.answerSelect } /> Trainer
					</div>
					<div className="card">
						<label>Are you a full-time ?</label> <br />
						<input type="radio" name="a3" value="yes" onChange={ this.answerSelect } /> Yes
						<input type="radio" name="a3" value="no" onChange={ this.answerSelect } /> No
					</div>
					<div className="card">
						<label>Thanks for your time</label> <br />
						<input type="submit" className="feedback-button" value="submit" />
					</div>
				</form>
			</div>;
		} else if (this.state.isSubmitted ===true && this.state.studentName !=='') {
			studentName = <h1>Thanks, {this.state.studentName}</h1>;
		}
		return (
			<div>
				{ studentName }
				--------------
				{ questions }
			</div>
		);
	}
}
