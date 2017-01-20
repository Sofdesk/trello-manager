
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { isEqual } from 'lodash';
import LeftIcon from 'material-ui/svg-icons/action/bookmark';
import * as colors from 'material-ui/styles/colors';

import { openPopup, addLabel, removeLabel, closePopup } from '../actions'

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const notSet = { name: 'Not set', color:colors.grey500 };

class Labels extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return !isEqual(nextProps.card, this.props.card) ||
			nextProps.popupOpened !== this.props.popupOpened;
	}
	render() {
		const { card, options, style, popupOpened, popupKey, openedPopupAnchor, dispatch } = this.props;

		const allOptions = [...options, notSet];
		const possibleOptions = allOptions.filter((option) => card.idLabels.includes(option.id));
		const selectedOption = possibleOptions.pop() || notSet;

		const handleTouchTap = (event) => {
			event.preventDefault();
			dispatch(openPopup(event.currentTarget, popupKey));
		};
		const handleSelect = (option) => {
			dispatch(closePopup());
			if (option.id) {
				dispatch(addLabel(card.id, option.id));
			}
			if (selectedOption.id) {
				dispatch(removeLabel(card.id, selectedOption.id));
			}
		};
		const handleCancel = () => {
			dispatch(closePopup());
		};

		const itemStyle = {
			lineHeight: '28px',
			minHeight: 28,
		};

		return (
			<span>
		        <RaisedButton
		          onTouchTap={handleTouchTap}
		          label={selectedOption.name}
		          style={{ width:150, marginRight:10, height:28, lineHeight:'28px', ...style }}
		          backgroundColor={selectedOption.color}
		        />
		        <Popover
		          open={popupOpened}
		          anchorEl={openedPopupAnchor}
		          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
		          targetOrigin={{horizontal: 'left', vertical: 'top'}}
		          onRequestClose={handleCancel}
		        >
		          <Menu>
		          	{ allOptions.map((option, i) => {
						const handleSelection = (event) => {
							event.preventDefault();
							handleSelect(option);
						}
		          		return (
		          			<MenuItem
		          				key={i}
		          				primaryText={option.name}
		          				onTouchTap={handleSelection}
		          				style={itemStyle}
		          				innerDivStyle={{ paddingLeft:52 }}
		          				leftIcon={<LeftIcon color={option.color} style={{ marginTop:0 }} />}
	          				/>
	          			);
	      			})}
		          </Menu>
		        </Popover>
		    </span>
		);
	}
};

const mapStateToProps = (state = {}, props) => {
	const popupKey = props.type + props.card.id;
	return {
		popupKey,
		popupOpened: popupKey === state.openedPopup.popupKey,
		openedPopupAnchor: state.openedPopup.anchor,
	};
};

export default connect(mapStateToProps)(Labels);
