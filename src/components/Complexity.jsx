
import React from 'react';
import * as colors from 'material-ui/styles/colors';

import { editCardName } from '../actions';

import Labels from './Labels.jsx';

const complexities = [
  { id:'2', name: '2', color:colors.lightBlue400 },
  { id:'4', name: '4', color:colors.lightBlue400 },
  { id:'8', name: '8', color:colors.yellow600 },
  { id:'16', name: '16', color:colors.yellow600 },
  { id:'32', name: '32', color:colors.deepOrangeA400 },
  { id:'64', name: '64', color:colors.deepOrangeA400 },
];

class Complexity extends React.PureComponent {
	onLabelChange = (oldOption, newOption) => {
		let newTitle = this.props.card.name;
		if (oldOption) {
			newTitle = newTitle.replace(`(${oldOption.id})`, '').trim();
		}
		if (newOption) {
			newTitle = `(${newOption.id}) ${newTitle}`;
		}
		this.props.dispatch(editCardName(this.props.card.id, newTitle));
	}
	render() {
		const { card } = this.props;

		const selectedComplexity = [];
		const titleComplexity = card.name.match(/^\((\d+)\)/);
		if (titleComplexity && titleComplexity.length === 2) {
			selectedComplexity.push(titleComplexity[1]);
		}

		const labelProps = {
			cardId: card.id,
			selectedLabels: selectedComplexity,
			options: complexities,
			onLabelChange: this.onLabelChange,
			style: {
				flex:'0 1 auto',
				width: 100,
			},
			type: 'complexity',
		};

		return (
			<Labels { ...labelProps } />
		);
	}
}

export default Complexity;
