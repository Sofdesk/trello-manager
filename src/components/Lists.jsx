
import React from 'react';
import List from './List.jsx';

export default function App(props) {
	return (
		<div>
			{ props.lists.map((list) => (<List list={list} key={list.id} />)) }
		</div>
	);
};
