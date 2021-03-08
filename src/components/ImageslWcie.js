import React from 'react';
import styled from 'styled-components';
import desktopImage from '../assets/images/wcie/desktop-main.png';
import tabletImage from '../assets/images/wcie/tablet-main.png';

const Detail = () => (
	<Container>
		<Desktop>
			<img src={desktopImage} alt="Desktop Preview" />
		</Desktop>
		<Tablet>
			<img src={tabletImage} alt="Tablet Preview"></img>
		</Tablet>
	</Container>
);

const Container = styled.div`
	& > * {
		width: 100%;
		border-radius: 5px;
		background-color: #d9d7d4;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 5px;
	}
`;

/* ----------- Desktop ----------- */
const Desktop = styled.div`
	display: flex;
	justify-content: center;
	padding: 3%;
	margin-bottom: 50px;
`;

/* ----------- Tablet ----------- */
const Tablet = styled.div`
	padding: 10%;
`;

export default Detail;
