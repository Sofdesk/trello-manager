
import React from 'react';
import List from './List.jsx';

export default function App({ listsById, cardsById, cardsIdByListId, labels }) {
	const one = Object.keys(listsById)[0];
	const two = one ? [one] : [];
	return (
		<div>
			{ two.map((listId) => {
				return (<List key={listId} list={listsById[listId]} cardsIdByListId={cardsIdByListId} cardsById={cardsById} labels={labels} />);
			}) }
		</div>
	);
};
