
import { difference } from 'lodash';

export const ADD_LISTS = 'ADD_LISTS';
export const ADD_CARDS = 'ADD_CARDS';
export const ADD_LABELS = 'ADD_LABELS';
export const OPEN_POPUP = 'OPEN_POPUP';
export const REMOVE_PRIORITY = 'REMOVE_PRIORITY';
export const CLOSE_POPUP = 'CLOSE_POPUP';
export const ADD_LABEL = 'ADD_LABEL';
export const REMOVE_LABEL = 'REMOVE_LABEL';
export const SORT_LABELS = 'SORT_LABELS';

export function addLists(lists) {
	return {
		type: ADD_LISTS,
		lists,
	};
};

export function addCards(cards) {
	return {
		type: ADD_CARDS,
		cards,
	};
};

export function addLabels(labels) {
	return {
		type: ADD_LABELS,
		labels,
	};
};

export function fetchLists(boardId) {
	return (dispatch) => {
		window.Trello.get(`boards/${boardId}/lists`,
	    	(lists) => dispatch(addLists(lists)),
	    	(error) => console.log(error));
	};
};

export function fetchCards(boardId) {
	return (dispatch) => {
		window.Trello.get(`boards/${boardId}/cards`,
	    	(cards) => dispatch(addCards(cards.sort((a, b) => a.pos - b.pos))),
	    	(error) => console.log(error));
	};
};

export function fetchLabels(boardId) {
	return (dispatch) => {
		window.Trello.get(`boards/${boardId}/labels`,
	    	(labels) => dispatch(addLabels(labels)),
	    	(error) => console.log(error));
	};
};

export function openPopup(domAnchor, popupKey) {
	return {
		type: OPEN_POPUP,
		domAnchor,
		popupKey: popupKey,
	};
};
export function closePopup() {
	return {
		type: CLOSE_POPUP,
	};
};
export function addLabel(cardId, labelId) {
	return (dispatch) => {
		window.Trello.post(`cards/${cardId}/idLabels`,
			{ value:labelId },
	    	() => dispatch({
	    		type: ADD_LABEL,
	    		cardId,
	    		labelId,
    		}),
	    	(error) => console.log(error));
	}
};
export function removeLabel(cardId, labelId) {
	return (dispatch) => {
		window.Trello.delete(`cards/${cardId}/idLabels/${labelId}`,
	    	() => dispatch({
	    		type: REMOVE_LABEL,
	    		cardId,
	    		labelId,
    		}),
	    	(error) => console.log(error));
	}
};

export function sortLabels(oldLabelIds, newLabelIds) {
	const sortedLabelIds = difference(oldLabelIds, newLabelIds);
	sortedLabelIds.splice(0, 0, ...newLabelIds);

	return {
		type: SORT_LABELS,
		sortedLabelIds,
	};
};