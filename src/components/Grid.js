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
	const words = useSelector((state) => state.addWord.words);
	let gridValues = CreateGrid();

	useEffect(() => {
		console.log(words);
		addWordToGrid(words);
		CreateGrid();
	});

	const addWordToGrid = (words) => {
		words.forEach((w) => {
			let randomIndex = Math.floor(Math.random() * w.length);
			console.log('here and index random is ' + randomIndex);
			if (randomIndex % 2 === 0) {
				if (width - randomIndex > 0) {
					for (let i = 0; i < w.length; i++) {
						gridValues.forEach((v) => {
							if (randomIndex === v.x + i) {
								v = w.charAt(i);
							}
						});
					}
				}
			} else {
				if (height - randomIndex > 0) {
					for (let i = 0; i < w.length; i++) {
						gridValues.forEach((v) => {
							if (randomIndex === v.y + i) {
								console.log(v);

								v = w.charAt(i);
							}
						});
					}
				}
			}
		});
	};

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
