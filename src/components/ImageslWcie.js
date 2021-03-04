import React from 'react';
import styled from 'styled-components';
import desktopImage from '../assets/images/wcie/desktop-main.png';
import tabletImage from '../assets/images/wcie/tablet-main.png';
import mobileImage from '../assets/images/wcie/mobile-main.png';

const Detail = () => (
	<Container>
		<Desktop>
			<DesktopImg src={desktopImage} alt="Desktop Preview" />
		</Desktop>
		<ExceptDesktop>
			<TabletImg src={tabletImage} alt="Tablet Preview"></TabletImg>
			<MobileImg src={mobileImage} alt="Mobile Preview"></MobileImg>
		</ExceptDesktop>
	</Container>
);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& > * {
		width: 100%;
		border-radius: 5px;
		background-color: #d9d7d4;
	}
`;

/* ----------- Desktop ----------- */
const Desktop = styled.div`
	display: flex;
	justify-content: center;
	padding: 50px 15%;
	margin-bottom: 80px;
`;

const DesktopImg = styled.img`
	width: 100%;
`;

/* ----------- ExceptDesktop ----------- */
const ExceptDesktop = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 50px 15%;
`;

const TabletImg = styled.img`
	width: 50%;
`;

const MobileImg = styled.img`
	width: 40%;
`;

export default Detail;
