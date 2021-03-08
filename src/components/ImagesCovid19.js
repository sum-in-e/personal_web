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
			<img src={desktopHome} alt="Desktop Preview" />
			<img src={desktopAbout} alt="Desktop Preview" />
			<img src={desktopDashboard} alt="Desktop Preview" />
		</Desktop>
		<Tablet>
			<BlockInTablet>
				<img src={tabletHome} alt="Tablet Preview"></img>
				<img src={tabletDashboard} alt="Tablet Preview"></img>
			</BlockInTablet>
			<img src={tabletAbout} alt="Tablet Preview"></img>
		</Tablet>
		<Mobile>
			<BlockInMobile>
				<img src={mobileHome} alt="Mobile Preview"></img>
				<img src={mobileDashboard} alt="Mobile Preview"></img>
			</BlockInMobile>
			<img src={mobileAbout} alt="Mobile Preview"></img>
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
		margin-bottom: 50px;
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
	flex-direction: column;
	justify-content: center;
	padding: 3%;
	& > *:not(:last-child) {
		margin-bottom: 5%;
	}
`;

/* ----------- Tablet ----------- */
const Tablet = styled.div`
	padding: 10%;
`;

const BlockInTablet = styled.div`
	width: 100%;
	& > * {
		margin-bottom: 10%;
	}
`;

/* ----------- Mobile ----------- */
const Mobile = styled.div`
	padding: 15%;
`;

const BlockInMobile = styled.div`
	width: 100%;
	& > * {
		margin-bottom: 10%;
	}
`;

export default Detail;
