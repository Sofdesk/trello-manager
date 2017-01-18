
import React from 'react';
import { connect } from 'react-redux'
import makeSortedCards from '../selectors/makeSortedCards.js'

import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import {default as ListCard} from './Card.jsx';

const MyList = ({ list, cards, labels }) => {
	return (
		<Card>
			<CardHeader
				title={ list.name }
				actAsExpander={true}
				showExpandableButton={true}
			/>
			<CardText expandable={true}>
				<List>
					{ cards.map((card) => (<ListCard key={card.id} card={card} labels={labels} />)) }
				</List>
			</CardText>
		</Card>
	);
};

const makeMapStateToProps = () => {
  const getSortedCards = makeSortedCards()
  const mapStateToProps = (state, props) => {
    return {
      cards: getSortedCards(state, props),
    };
  };
  return mapStateToProps;
};

const MySortedList = connect(
  makeMapStateToProps()
)(MyList);

export default MySortedList;
