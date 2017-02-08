import '../css/style.css';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// Demo 1
import Demo1 from './react-commponent/demo1.jsx';
render( 
	<section className="section">
		<header><h1>React Commponent Demo 1</h1></header>
		<Demo1 color="blue" />
	</section>, 
	document.getElementById('demo1')
);

// Demo 2
import Demo2 from './react-commponent/demo2.jsx';
render( 
	<section className="section">
		<header><h1>React Commponent Demo 2</h1></header>
		<Demo2 color="blue" />
	</section>, 
	document.getElementById('demo2')
);

//Demo 3
import App from './redux-demo/App';
import reducer from './redux-demo/reducer';
const store = createStore(reducer);
render(
	<section className="section">
		<Provider store={store}>
			<App />
		</Provider>
	</section>,
	document.getElementById('demo3')
);

console.log(store.getState());
