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
			studentName: '',
			answers: { 
				a1: '',
				a2: '',
				a3: ''
			},
			isSubmitted: false
		};
	}
	render() {
		var studentName;
		var questions;
		if (this.state.studentName ==='' && this.state.isSubmitted ===false) {
			studentName = <div>
				<h2>Let us Kknow your Name:</h2>
				<form>
					<input type="text" placeholder="Enter Your Name" ref="name" />
				</form>
			</div>
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
