import { createStore, combineReducers } from 'redux';

const INITIAL_STATE = {
	x: 10,
	y: 5,
	gap: 5,
	counter: 0,
};

const INITIAL_WORDS = {
	words: [],
};

function addWord(state = INITIAL_WORDS, action) {
	switch (action.type) {
		case 'ADD_WORD':
			return {
				...state,
				words: [ ...state.words, action.word ],
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

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
