
import React from 'react';
import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

const Priority = ({ label }) => {
	return (
		<RaisedButton style={{ width:150, marginRight:10, height:28, lineHeight:'28px' }} backgroundColor={label.color}>
			{label.name}
		</RaisedButton>
	);
};

export default function Card({ card }) {
	return (
		<ListItem>
			<div style={{ float:'left', marginTop:-6 }}>
				{ card.labels.map((label) => (<Priority key={label.id} label={label} />)) }
			</div>
			<span style={{ marginLeft:20 }}>{card.name}</span>
		</ListItem>
	);
};
