import styled from 'styled-components';

export const LetterStyle = styled.p`
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	top: ${(props) => props.x * props.gap}0px;
	left: ${(props) => props.y * props.gap}0px;
`;

export const GridStyle = styled.div`
	padding: 2rem;
	width: 40%;
	background-color: orange;
	margin: auto;
	justify-content: center;
	position: relative;
	height: auto;
`;

export const ControlsStyle = styled.div`
	position: fixed;
	bottom: 0;
`;
