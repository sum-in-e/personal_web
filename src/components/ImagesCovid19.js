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
	@media ${props => props.theme.l} {
		padding: 0 100px;
	}
	@media ${props => props.theme.xl} {
		padding: 0 250px;
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
	@media ${props => props.theme.m} {
		padding: 5% 15%;
	}
`;

const BlockInTablet = styled.div`
	width: 100%;
	& > * {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		& > * {
			margin-bottom: 5%;
		}
	}
`;

/* ----------- Mobile ----------- */
const Mobile = styled.div`
	padding: 15%;

	@media ${props => props.theme.m} {
		display: flex;
		justify-content: space-between;
		padding: 5%;
		& > *:last-child {
			width: 47%;
			margin: 0;
			padding-top: 90px;
		}
	}
`;

const BlockInMobile = styled.div`
	width: 100%;
	& > * {
		margin-bottom: 10%;
	}

	@media ${props => props.theme.m} {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 47%;
		img {
			height: auto;
		}
	}
`;

export default Detail;
