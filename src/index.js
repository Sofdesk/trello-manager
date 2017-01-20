
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

if (process.env.NODE_ENV !== 'production') {
  window.Perf = require('react-addons-perf');
}

import App from './App';
import './index.css';

import * as colors from 'material-ui/styles/colors';

import configureStore from './configureStore.js';
let store = configureStore({
  labels: {
    lennieLabels: [
      { name: 'Urgent', color:colors.pink900, id:'587ae37ed5d9878f69feb58b' },
      { name: 'High', color:colors.red900, id:'587ae382331a2bd271d1c9a3' },
      { name: 'Medium', color:colors.deepOrange600, id:'587ae386399054ed3d6ecf1f' },
      { name: 'Low', color:colors.amber700, id:'587ae39130716d0290095b2b' },
      { name: 'Need More Info', color:colors.teal200, id:'587ae3a32efa038148211d9a' },
    ],
    emilyLabels: [
      { name: 'Urgent', color:colors.pink900, id:'587ef0bbb45d2e4c095fd018' },
      { name: 'High', color:colors.red900, id:'587ef0c15dba14805ef03242' },
      { name: 'Medium', color:colors.deepOrange600, id:'587ef0ce924985b7ebff2fae' },
      { name: 'Low', color:colors.amber700, id:'587ef0d52885166cf064b756' },
      { name: 'Need More Info', color:colors.teal200, id:'587ef1015a3cb74ed3e491cc' },
    ],
    devLabels: [
      { name: 'Urgent', color:colors.pink900, id:'587ef1105b08e26f502932b4' },
      { name: 'High', color:colors.red900, id:'587ef1158b33b0028394b322' },
      { name: 'Medium', color:colors.deepOrange600, id:'587ef11be0cf3a61caead723' },
      { name: 'Low', color:colors.amber700, id:'587ef11f8b46cf4c66dacc25' },
      { name: 'Need More Info', color:colors.teal200, id:'587ef12933fdcfb511ec224e' },
    ],
    statusLabels: [
      { name: 'Blocked', color:colors.pink900, id:'587ef1365b513d4f634569f1' },
      { name: 'Working on it', color:colors.amber500, id:'587ef13e8b17b68029cfbf43' },
      { name: 'Ready', color:colors.lightGreenA700, id:'587ef14404a01b02be8450c4' },
      { name: 'Needs Rework', color:colors.deepOrange500, id:'587ef14b146050274ad3035e' },
      { name: 'Ready for Deploy', color:colors.cyanA200, id:'587ef151c287b70d8da70cbd' },
      { name: 'Wait on Task', color:colors.lime300, id:'587ae3a9adda40abc68d799e' },
      { name: 'Done', color:colors.teal500, id:'587ef15a912b77d435d26640' },
    ],
  }
});
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
