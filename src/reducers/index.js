
import { ADD_LIST, ADD_CARD } from '../actions';

export function lists(state = [], action) {
	switch (action.type) {
		case ADD_LIST:
			return [
				...state,
				action.list,
			];
		default:
			return state;
	}
};

export function cards(state = [], action) {
	switch (action.type) {
		case ADD_CARD:
			return [
				...state,
				action.card,
			];
		default:
			return state;
	}
};

const cardsByList = (state = {}, action) => {
	switch (action.type) {
		case ADD_CARD:
			const card = action.card;
			return {
				...state,
				[card.idList]: [
					...(state[card.idList] || []),
					card,
				],
			};
		default:
			return state;
	}
};

export default function(state = {}, action) {
	const newState = {
		lists: lists(state.lists, action),
		cardsByList: cardsByList(state.cardsByList, action),
	};
	return {
		...newState,
		listsWithCards: newState.lists.map((list) => {
			return {
				...list,
				cards: newState.cardsByList[list.id] || [],
			};
		}),
	};
};
