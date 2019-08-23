import { createStore, combineReducers } from 'redux';

const INITIAL_STATE = {
	x: 10,
	y: 5,
	gap: 5,
	counter: 0,
};

function addWord(state = [], action) {
	switch (action.type) {
		case 'ADD_WORD':
			return {
				...state,
				words: [ ...state, action.word ],
			};
		default:
			return state;
	}
}

function dimensions(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'CHANGE_DIMENSIONS':
			console.log(action);
			return {
				...state,
				x: action.x,
				y: action.y,
				gap: action.gap,
			};
		default:
			return state;
	}
}

const reducer = combineReducers({ dimensions, addWord });

const store = createStore(reducer);

export default store;
