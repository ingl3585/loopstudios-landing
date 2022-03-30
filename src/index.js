import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
	<HashRouter basename='/'>
		<App />
	</HashRouter>,
	document.getElementById('root')
);
