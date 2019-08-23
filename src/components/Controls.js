import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ControlsStyle } from '../styles/Styles';

export default function Controls() {
	const dispatch = useDispatch();
	const [ height, setHeight ] = useState(10);
	const [ width, setWidth ] = useState(10);
	const [ gap, setGap ] = useState(10);

	function ChangeGrid() {
		dispatch({ type: 'CHANGE_DIMENSIONS', y: parseInt(height), x: parseInt(width), gap: parseInt(gap) });
	}

	return (
		<ControlsStyle>
			<input onChange={(e) => setWidth(e.target.value)} placeholder='x dimension' type='number' />
			<input onChange={(e) => setHeight(e.target.value)} placeholder='y dimension' type='number' />
			<input onChange={(e) => setGap(e.target.value)} placeholder='gap' type='number' />
			<input
				onChange={(e) => dispatch({ type: 'ADD_WORD', word: e.target.value })}
				placeholder='add word to grid'
				type='text'
			/>
			<button onClick={ChangeGrid}> Create </button>
		</ControlsStyle>
	);
}
