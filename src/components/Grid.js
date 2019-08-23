import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import Letter from './Letter';
import { GridStyle } from '../styles/Styles';
import { useSelector } from 'react-redux';

const character = [ ...'abcdefghijklmnopqrstuvwxyz' ];

function getRandomLetter() {
	return character[Math.floor(Math.random() * character.length)];
}

export default function Grid() {
	const height = useSelector((state) => state.dimensions.x);
	const width = useSelector((state) => state.dimensions.y);
	const gap = useSelector((state) => state.dimensions.gap);
	let gridValues = CreateGrid();

	useEffect(() => {
		CreateGrid();
	});

	function CreateGrid() {
		let val = [];
		for (let w = 0; w < width; w++) {
			for (let h = 0; h < height; h++) {
				let obj = {
					x: w,
					y: h,
					letter: getRandomLetter(),
					gap: gap,
				};
				val.push(obj);
			}
		}
		return val;
	}

	return (
		<GridStyle x={width} y={height}>
			{gridValues.map((item) => (
				<Letter key={uuid()} letter={item.letter} x={item.x} y={item.y} gap={item.gap} />
			))}
		</GridStyle>
	);
}
