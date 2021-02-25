import React from 'react';
import styled from 'styled-components';
import desktopHome from '../assets/images/covid19/desktop-home.png';
import desktopAbout from '../assets/images/covid19/desktop-about.png';
import desktopDashboard from '../assets/images/covid19/desktop-dashboard.png';
import tabletHome from '../assets/images/covid19/tablet-home.png';
import tabletAbout from '../assets/images/covid19/tablet-about.png';
import tabletDashboard from '../assets/images/covid19/tablet-dashboard.png';
import mobileHome from '../assets/images/covid19/mobile-home.png';
import mobileAbout from '../assets/images/covid19/mobile-about.png';
import mobileDashboard from '../assets/images/covid19/mobile-dashboard.png';

const Detail = () => (
	<Container>
		<Desktop>
			<DesktopImg src={desktopHome} alt="Desktop Preview" />
			<DesktopImg src={desktopAbout} alt="Desktop Preview" />
			<DesktopImg src={desktopDashboard} alt="Desktop Preview" />
		</Desktop>
		<Tablet>
			<BlockInTablet>
				<TabletImg src={tabletHome} alt="Tablet Preview"></TabletImg>
				<TabletImg src={tabletDashboard} alt="Tablet Preview"></TabletImg>
			</BlockInTablet>
			<TabletImg src={tabletAbout} alt="Tablet Preview"></TabletImg>
		</Tablet>
		<Mobile>
			<BlockInMobile>
				<MobileImg src={mobileHome} alt="Mobile Preview"></MobileImg>
				<MobileImg src={mobileDashboard} alt="Mobile Preview"></MobileImg>
			</BlockInMobile>
			<MobileImg src={mobileAbout} alt="Mobile Preview"></MobileImg>
		</Mobile>
	</Container>
);

const Container = styled.article`
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
	justify-content: center;
	width: 47%;
	& > * {
		width: 100%;
	}
	& > *:first-child {
		margin-bottom: 50px;
	}
`;

const Mobile = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 50px 15%;
`;

const MobileImg = styled.img`
	width: 35%;
`;

const BlockInMobile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 35%;
	& > * {
		width: 100%;
	}
	& > *:first-child {
		margin-bottom: 50px;
	}
`;

export default Detail;
