
import { combineReducers } from 'redux';
import update from 'react-addons-update';

import { ADD_LISTS, ADD_CARDS, ADD_LABELS, OPEN_POPUP, CLOSE_POPUP, ADD_LABEL, REMOVE_LABEL, SORT_LABELS } from '../actions';

export function lists(state = [], action) {
	switch (action.type) {
		case ADD_LISTS:
			return [
				...state,
				...action.lists,
			];
		default:
			return state;
	}
};

export function cards(state = [], action) {
	switch (action.type) {
		case ADD_CARDS:
			return [
				...state,
				...action.cards,
			];
		default:
			return state;
	}
};

export function labels(state = [], action) {
	switch (action.type) {
		case ADD_LABELS:
			return [
				...state,
				...action.labels,
			];
		default:
			return state;
	}
};

const openedPopup = (state = {}, action) => {
	switch (action.type) {
		case OPEN_POPUP:
			return {
				anchor: action.domAnchor,
				popupKey: action.popupKey,
			};
		case CLOSE_POPUP:
			return {};
		default:
			return state;
	}
};

const listsById = (state = {}, action) => {
	switch (action.type) {
		case ADD_LISTS:
			return action.lists.reduce((newState, list) => ({
				...newState,
				[list.id]: list,
			}), state);
		default:
			return state;
	}
};

const cardsById = (state = {}, action) => {
	switch (action.type) {
		case ADD_CARDS:
			return action.cards.reduce((newState, card) => ({
				...newState,
				[card.id]: card,
			}), state);
		case ADD_LABEL:
			return update(state, {
				[action.cardId]: {
					idLabels:{
						$push: [ action.labelId ],
					},
				},
			});
		case REMOVE_LABEL:
			return update(state, {
				[action.cardId]: {
					idLabels:{
						$splice: [[ state[action.cardId].idLabels.indexOf(action.labelId), 1 ]],
					},
				},
			});
		default:
			return state;
	}
};

const cardsIdByListId = (state = {}, action) => {
	switch (action.type) {
		case ADD_CARDS:
			return action.cards.reduce((newState, card) => ({
				...newState,
				[card.idList]: [
					...(newState[card.idList] || []),
					card.id,
				],
			}), state);
		default:
			return state;
	}
};

const sortedLabelIds = (state = [], action) => {
	switch (action.type) {
		case SORT_LABELS:
			return action.sortedLabelIds;
		default:
			return state;
	}
}

export default combineReducers({
	listsById,
	cardsById,
	cardsIdByListId,
	sortedLabelIds,
	openedPopup: openedPopup,
	labels: (state = {}) => state,
});
