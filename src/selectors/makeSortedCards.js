
import { createSelector } from 'reselect'
import { isUndefined } from 'lodash';


const getSortedLabelIds = (state, props) => state.sortedLabelIds;
const getCardIds = (state, props) => state.cardsIdByListId[props.list.id] || [];
const getCards = (state, props) => state.cardsById;

const makeSortedCards = () => {
  return createSelector(
    [ getSortedLabelIds, getCardIds, getCards ],
    (sortedLabelIds, cardIds, cardsById) => {
    	const cardOrdering = cardIds.map((cardId) => cardsById[cardId].idLabels
											    		.map((labelId) => sortedLabelIds.indexOf(labelId))	// return ordering position of each label
														.filter((index) => index !== -1)	// remove unknown/unsorted labels
														.sort()
    									);

    	const sortedCardIds = [...cardIds].sort((cardA, cardB) => {
    		const cardAindex = cardIds.indexOf(cardA);
    		const cardBindex = cardIds.indexOf(cardB);
    		const cardAorder = cardOrdering[cardAindex] || [];
    		const cardBorder = cardOrdering[cardBindex] || [];
    		let i = 0;
    		const max = cardAorder.length + cardBorder.length;
    		let result = 0;
    		while (i < max && result === 0) {
    			if (isUndefined(cardAorder[i])) {
    				result = 1;	// choose B
    			}
    			else if (isUndefined(cardBorder[i])) {
    				result = -1;	// choose A
    			}
    			if (cardAorder[i] > cardBorder[i]) {
    				result = 1;	// choose B
    			}
    			else if (cardAorder[i] < cardBorder[i]) {
    				result = -1;	// choose A
    			}
    			i++;
    		}
    		return result === 0 ? cardsById[cardA].pos - cardsById[cardB].pos : result;
    	});

    	const cards = sortedCardIds.map((cardId) => cardsById[cardId]);
    	return cards;
    }
  )
}

export default makeSortedCards;
