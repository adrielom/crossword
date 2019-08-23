import React from 'react';
import { LetterStyle } from '../styles/Styles';

export default function Letter({ letter, x, y, gap }) {
	return (
		<LetterStyle x={x} y={y} gap={gap}>
			{letter}
		</LetterStyle>
	);
}
