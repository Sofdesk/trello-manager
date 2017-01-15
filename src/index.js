
const Trello = window.Trello;

Trello.authorize({
  name: 'Sofdesk Tasks Manager',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: function() { console.log('Successful authentication'); },
  error: function() { console.log('Failed authentication'); },
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import configureStore from './configureStore.js';
let store = configureStore();
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
	<Provider store={store}>
		<App />
  	</Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);
