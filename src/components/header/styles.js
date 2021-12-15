
import styled from 'styled-components'

export const Wrapper = styled.div`
	background: #1c1c1c;
	width: 100%;
	border: 0px;
	border-bottom: 1px solid #ff1361 ;
	border-image-slice: 1;
	color: white;
	margin: auto;
	text-decoration: none;
`

export const Overlay = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	display: none;
	transition: 0.4s;
	${({ sidebar }) =>
		sidebar &&
		`
			display: block;
			z-index: 4;	
	`}
`