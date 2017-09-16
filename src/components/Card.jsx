
import React from 'react';
import * as colors from 'material-ui/styles/colors';

import Labels from './Labels.jsx';
import { addLabel, removeLabel } from '../actions'
import Complexity from './Complexity.jsx';

const LabelBadge = ({ labelIds, style }) => {
	const pulseStyle = {
		flex:'0 1 auto',
		width:10,
		height:5,
		borderRadius:2,
		marginBottom:1,
	};
	const showModules = labelIds.includes('56d854bd152c3f92fd4507f4') || labelIds.includes('56d855d7152c3f92fd450cbe') || labelIds.includes('564aa54d70898cd19eefba91');
	return (
		<div style={{ ...style, alignSelf:'stretch', display:'flex', flexDirection:'column', marginRight:10 }}>
			<div style={{ ...pulseStyle, backgroundColor:colors.blue900, visibility: labelIds.includes('556718b1664ce8ff304f68c0') ? 'visible' : 'hidden' }} />
			<div style={{ ...pulseStyle, backgroundColor:colors.deepPurple400, visibility: labelIds.includes('556718b1664ce8ff304f68bf') ? 'visible' : 'hidden' }} />
			<div style={{ ...pulseStyle, backgroundColor:colors.lightBlue300, visibility: labelIds.includes('56e1a7e5152c3f92fd5e2054') ? 'visible' : 'hidden' }} />
			<div style={{ ...pulseStyle, backgroundColor:colors.amber400, visibility: labelIds.includes('5799072084e677fd36b12b37') ? 'visible' : 'hidden' }} />
			<div style={{ ...pulseStyle, backgroundColor:colors.purpleA200, visibility: showModules ? 'visible' : 'hidden' }} />
		</div>
	);
};

class Card extends React.PureComponent {
	onLabelChange = (oldOption, newOption) => {
		if (newOption) {
			this.props.dispatch(addLabel(this.props.card.id, newOption.id));
		}
		if (oldOption) {
			this.props.dispatch(removeLabel(this.props.card.id, oldOption.id));
		}
	}
	render() {
		const { card, labels, dispatch } = this.props;

		const labelProps = {
			cardId: card.id,
			selectedLabels: card.idLabels,
			onLabelChange: this.onLabelChange,
			style: {
				flex:'0 1 auto',
			},
		};

		return (
			<div style={{ padding:10, borderBottom:'1px solid #ccc', display:'flex', alignItems:'center' }}>
				<Labels { ...labelProps } type="sales" options={labels.salesLabels} />
				<Labels { ...labelProps } type="dev" options={labels.devLabels} />
				<Labels { ...labelProps } type="customer" options={labels.customerLabels} />
				<Labels { ...labelProps } type="status" options={labels.statusLabels} />
				<Complexity card={card} dispatch={dispatch} />
				<LabelBadge labelIds={card.idLabels} />
				<div style={{ flex:'0 1 auto' }}><a href={card.shortUrl} target="_blank">{card.name.replace(/^\((\d+)\)/, '')}</a></div>
			</div>
		);
	}
}

export default Card;
