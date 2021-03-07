import React from 'react';
import styled from 'styled-components';
import desktopHome from '../assets/images/bookstore/desktop-home.png';
import desktopSearch from '../assets/images/bookstore/desktop-search.png';
import desktopNoSearch from '../assets/images/bookstore/desktop-no-search.png';
import desktopDetail from '../assets/images/bookstore/desktop-detail.png';
import tabletHome from '../assets/images/bookstore/tablet-home.png';
import tabletSearch from '../assets/images/bookstore/tablet-search.png';
import tabletDetail from '../assets/images/bookstore/tablet-detail.png';
import mobileHome from '../assets/images/bookstore/mobile-home.png';
import mobileSearch from '../assets/images/bookstore/mobile-search.png';
import mobileDetail from '../assets/images/bookstore/mobile-detail.png';

const Detail = () => (
	<Container>
		<Desktop>
			<DesktopImg src={desktopHome} alt="Desktop Preview" />
			<DesktopImg src={desktopDetail} alt="Desktop Preview" />
			<DesktopImg src={desktopSearch} alt="Desktop Preview" />
			<DesktopImg src={desktopNoSearch} alt="Desktop Preview" />
		</Desktop>
		<Tablet>
			<TabletImg src={tabletHome} alt="Tablet Preview"></TabletImg>
			<TabletImg src={tabletDetail} alt="Tablet Preview"></TabletImg>
			<TabletImg src={tabletSearch} alt="Tablet Preview"></TabletImg>
		</Tablet>
		<Mobile>
			<MobileImg src={mobileHome} alt="Mobile Preview"></MobileImg>
			<MobileImg src={mobileDetail} alt="Mobile Preview"></MobileImg>
			<MobileImg src={mobileSearch} alt="Mobile Preview"></MobileImg>
		</Mobile>
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
	& > *:not(:last-child) {
		margin-bottom: 80px;
	}
`;

/* ----------- Desktop ----------- */
const Desktop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 50px 15%;

	& > *:not(:last-child) {
		margin-bottom: 50px;
	}
`;

const DesktopImg = styled.img`
	width: 100%;
`;

/* ----------- Tablet ----------- */
const Tablet = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 50px 15%;
	& > *:not(:last-child) {
		margin-bottom: 50px;
	}
`;

const TabletImg = styled.img`
	width: 60%;
`;

/* ----------- Mobile ----------- */
const Mobile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 50px 15%;
	& > *:not(:last-child) {
		margin-bottom: 50px;
	}
`;

const MobileImg = styled.img`
	width: 40%;
`;

export default Detail;
