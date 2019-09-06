import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ControlsStyle } from '../styles/Styles';

export default function Controls() {
	const dispatch = useDispatch();
	const [ height, setHeight ] = useState(10);
	const [ width, setWidth ] = useState(10);
	const [ gap, setGap ] = useState(10);
	const [ word, setWord ] = useState('');

	function ChangeGrid() {
		dispatch({ type: 'CHANGE_DIMENSIONS', y: parseInt(height), x: parseInt(width), gap: parseInt(gap) });
	}

	function AddWord() {
		console.log('adding word');
		dispatch({ type: 'ADD_WORD', word: word });
	}

	return (
		<ControlsStyle>
			<input onChange={(e) => setWidth(e.target.value)} placeholder='x dimension' type='number' />
			<input onChange={(e) => setHeight(e.target.value)} placeholder='y dimension' type='number' />
			<input onChange={(e) => setGap(e.target.value)} placeholder='gap' type='number' />
			<input onChange={(e) => setWord(e.target.value)} placeholder='add word to grid' type='text' />
			<button
				onClick={() => {
					ChangeGrid();
					AddWord();
				}}>
				Create
			</button>
		</ControlsStyle>
	);
}
