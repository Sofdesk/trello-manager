
export const ADD_LIST = 'ADD_LIST';
export const ADD_CARD = 'ADD_CARD';

export function addList(list) {
	return {
		type: ADD_LIST,
		list,
	};
};

export function addCard(card) {
	return {
		type: ADD_CARD,
		card,
	};
};

export function fetchLists(boardId) {
	return (dispatch) => {
		window.Trello.get(`boards/${boardId}/lists`,
	    	(lists) => lists.map((list) => dispatch(addList(list))),
	    	(error) => console.log(error));
	};
};

export function fetchCards(boardId) {
	return (dispatch) => {
		window.Trello.get(`boards/${boardId}/cards`,
	    	(cards) => cards.map((card) => dispatch(addCard(card))),
	    	(error) => console.log(error));
	};
};
