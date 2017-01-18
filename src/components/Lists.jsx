
import React from 'react';
import List from './List.jsx';

export default function App({ listsById, cardsById, cardsIdByListId, labels }) {
	return (
		<div>
			{ Object.keys(listsById).map((listId) => {
				const cards = (cardsIdByListId[listId] || []).map((cardId) => cardsById[cardId]);
				return (<List key={listId} list={listsById[listId]} cards={cards} labels={labels} />);
			}) }
		</div>
	);
};
