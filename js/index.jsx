import '../css/style.css';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Demo1 from './react-commponent/demo1.jsx';
import Demo2 from './react-commponent/demo2.jsx';

render( 
	<section className="section">
		<header><h1>React Commponent Demo 1</h1></header>
		<Demo1 color="blue" />
	</section>, 
	document.getElementById('demo1')
);

render( 
	<section className="section">
		<header><h1>React Commponent Demo 2</h1></header>
		<Demo2 color="blue" />
	</section>, 
	document.getElementById('demo2')
);

let obj = {firstName: 'Jett', lastName: 'Liu'};

const { lastName, firstName} = obj;

console.log(firstName);

