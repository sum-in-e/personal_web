import React from 'react';
import styled from 'styled-components';
import desktopMain from '../assets/images/vanillaSearchMovie/desktop-main.png';
import desktopSearch from '../assets/images/vanillaSearchMovie/desktop-search.png';
import desktopResults from '../assets/images/vanillaSearchMovie/desktop-results.png';
import desktopDetail from '../assets/images/vanillaSearchMovie/desktop-detail.png';
import tabletMain from '../assets/images/vanillaSearchMovie/tablet-main.png';
import tabletSearch from '../assets/images/vanillaSearchMovie/tablet-search.png';
import tabletDetail from '../assets/images/vanillaSearchMovie/tablet-detail.png';
import mobileMain from '../assets/images/vanillaSearchMovie/mobile-main.png';
import mobileSearch from '../assets/images/vanillaSearchMovie/mobile-search.png';
import mobileDetail from '../assets/images/vanillaSearchMovie/mobile-detail.png';

const Detail = () => (
	<Container>
		<Desktop>
			<DesktopImg src={desktopMain} alt="Desktop Preview" />
			<DesktopImg src={desktopSearch} alt="Desktop Preview" />
			<DesktopImg src={desktopResults} alt="Desktop Preview" />
			<DesktopImg src={desktopDetail} alt="Desktop Preview" />
		</Desktop>
		<Tablet>
			<BlockInTablet>
				<TabletImg src={tabletMain} alt="Tablet Preview"></TabletImg>
				<TabletImg src={tabletDetail} alt="Tablet Preview"></TabletImg>
			</BlockInTablet>
			<TabletImg src={tabletSearch} alt="Tablet Preview"></TabletImg>
		</Tablet>
		<Mobile>
			<MobileImg src={mobileSearch} alt="Mobile Preview"></MobileImg>
			<BlockInMobile>
				<MobileImg src={mobileMain} alt="Mobile Preview"></MobileImg>
				<MobileImg src={mobileDetail} alt="Mobile Preview"></MobileImg>
			</BlockInMobile>
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
	justify-content: space-between;
	padding: 50px 10%;
`;

const TabletImg = styled.img`
	width: 47%;
`;

const BlockInTablet = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 47%;

	& > * {
		width: 100%;
	}

	& > *:first-child {
		margin-bottom: 50px;
	}
`;

/* ----------- Mobile ----------- */
const Mobile = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 50px 10%;
`;

const MobileImg = styled.img`
	width: 35%;
`;

const BlockInMobile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 35%;
	& > * {
		width: 100%;
	}
	& > *:first-child {
		margin-bottom: 50px;
		width: 100%;
	}
`;

export default Detail;
