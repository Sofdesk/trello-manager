
import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import {default as ListCard} from './Card.jsx';

export default function App({ list, cards, labels }) {
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
