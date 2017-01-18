
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchLists, fetchCards, fetchLabels } from './actions';
import Lists from './components/Lists.jsx';

import logo from './logo.svg';
import './App.css';

import RaisedButton from 'material-ui/RaisedButton';
import * as colors from 'material-ui/styles/colors';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLists('zW2QPWTu'));
    this.props.dispatch(fetchCards('zW2QPWTu'));
    this.props.dispatch(fetchLabels('zW2QPWTu'));
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
        <div style={{ padding:26 }}>
          <RaisedButton
            // onTouchTap={handleTouchTap}
            label="Lennie"
            style={{ width:150, marginRight:10, height:28, lineHeight:'28px' }}
            backgroundColor={colors.amber500}
          />
          <RaisedButton
            // onTouchTap={handleTouchTap}
            label="Emily"
            style={{ width:150, marginRight:10, height:28, lineHeight:'28px' }}
            backgroundColor={colors.amber500}
          />
          <RaisedButton
            // onTouchTap={handleTouchTap}
            label="Dev team"
            style={{ width:150, marginRight:10, height:28, lineHeight:'28px' }}
            backgroundColor={colors.amber500}
          />
          <RaisedButton
            // onTouchTap={handleTouchTap}
            label="Status"
            style={{ width:150, marginRight:10, height:28, lineHeight:'28px' }}
            backgroundColor={colors.amber500}
          />
        </div>
        <Lists
          listsById={this.props.listsById}
          cardsById={this.props.cardsById}
          cardsIdByListId={this.props.cardsIdByListId}
          labels={this.props.labels}
        />
      </div>
    );
  }
}

const mapStateToProps = (state = { listsById:{}, cardsById:{}, cardsIdByListId:{} }) => {
  return {
    listsById: state.listsById,
    cardsById: state.cardsById,
    cardsIdByListId: state.cardsIdByListId,
    labels: state.labels,
  };
};

export default connect(mapStateToProps)(App);
