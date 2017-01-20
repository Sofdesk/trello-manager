
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchLists, fetchCards, fetchLabels, sortLabels } from './actions';
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
  handleSort(labelType, event) {
    event.preventDefault();
    if (labelType) {
      const newLabelIds = this.props.labels[labelType].map((label) => label.id);
      this.props.dispatch(sortLabels(this.props.sortedLabelIds, newLabelIds));
    }
    else {
      // clear
      this.props.dispatch(sortLabels([], []));
    }
  }
  handleSave = (event) => {
    event.preventDefault();
    console.log('Sorry, Redux sucks...');
    // this.props.dispatch(saveCardOrder(this.props.sortedLabelIds, newLabelIds));
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
            onTouchTap={this.handleSort.bind(this, 'lennieLabels')}
            label="Lennie"
            style={{ width:150, marginRight:10, height:28, lineHeight:'28px' }}
            backgroundColor={colors.amber500}
          />
          <RaisedButton
            onTouchTap={this.handleSort.bind(this, 'emilyLabels')}
            label="Emily"
            style={{ width:150, marginRight:10, height:28, lineHeight:'28px' }}
            backgroundColor={colors.amber500}
          />
          <RaisedButton
            onTouchTap={this.handleSort.bind(this, 'devLabels')}
            label="Dev team"
            style={{ width:150, marginRight:10, height:28, lineHeight:'28px' }}
            backgroundColor={colors.amber500}
          />
          <RaisedButton
            onTouchTap={this.handleSort.bind(this, 'statusLabels')}
            label="Status"
            style={{ width:150, marginRight:10, height:28, lineHeight:'28px' }}
            backgroundColor={colors.amber500}
          />
          <RaisedButton
            onTouchTap={() => console.log('nope')}
            label="Effort"
            style={{ width:100, marginRight:10, height:28, lineHeight:'28px' }}
            backgroundColor={colors.amber500}
          />
          <RaisedButton
            onTouchTap={this.handleSort.bind(this, '')}
            label="Clear sort"
            style={{ marginRight:10, height:28, lineHeight:'28px', float:'right' }}
            backgroundColor={colors.amber200}
          />
          <RaisedButton
            onTouchTap={this.handleSave}
            label="Save sort"
            style={{ marginRight:10, height:28, lineHeight:'28px', float:'right' }}
            backgroundColor={colors.lightBlue200}
          />
        </div>
        <Lists
          listsById={this.props.listsById}
          cardsById={this.props.cardsById}
          cardsIdByListId={this.props.cardsIdByListId}
          labels={this.props.labels}
          sortedLabelIds={this.props.sortedLabelIds}
        />
      </div>
    );
  }
}

const mapStateToProps = (state = { listsById:{}, cardsById:{}, cardsIdByListId:{}, sortedLabelIds:[] }) => {
  return {
    listsById: state.listsById,
    cardsById: state.cardsById,
    cardsIdByListId: state.cardsIdByListId,
    sortedLabelIds: state.sortedLabelIds,
    labels: state.labels,
  };
};

export default connect(mapStateToProps)(App);
