
import React from 'react';
import * as colors from 'material-ui/styles/colors';

import Labels from './Labels.jsx';

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

export default function Card({ card, labels }) {
	return (
		<div style={{ padding:10, borderBottom:'1px solid #ccc', display:'flex', alignItems:'center' }}>
			<Labels card={card} options={labels.lennieLabels} type="lennie" style={{ flex:'0 1 auto' }} />
			<Labels card={card} options={labels.emilyLabels} type="emily" style={{ flex:'0 1 auto' }} />
			<Labels card={card} options={labels.devLabels} type="dev" style={{ flex:'0 1 auto' }} />
			<Labels card={card} options={labels.statusLabels} type="status" style={{ flex:'0 1 auto' }} />
			<LabelBadge labelIds={card.idLabels} />
			<div style={{ flex:'0 1 auto' }}><a href={card.shortUrl} target="_blank">{card.name}</a></div>
		</div>
	);
};
