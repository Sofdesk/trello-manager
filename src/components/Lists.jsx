
import React from 'react';
import List from './List.jsx';

export default function App({ listsById, cardsById, cardsIdByListId, labels }) {
	return (
		<div>
			{ Object.keys(listsById).map((listId) => {
				return (<List key={listId} list={listsById[listId]} cardsIdByListId={cardsIdByListId} cardsById={cardsById} labels={labels} />);
			}) }
		</div>
	);
};
