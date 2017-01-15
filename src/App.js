
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchLists, fetchCards } from './actions';
import Lists from './components/Lists.jsx';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLists('zW2QPWTu'));
    this.props.dispatch(fetchCards('zW2QPWTu'));
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Sofdesk's Trello Manager (STM)</h2>
          </div>
        </div>
        <Lists lists={this.props.lists} />
      </div>
    );
  }
}

const mapStateToProps = (state = { lists:[] }) => {
  return {
    lists: state.listsWithCards,
  };
};

export default connect(mapStateToProps)(App);
