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
			<img src={desktopMain} alt="Desktop Preview" />
			<img src={desktopSearch} alt="Desktop Preview" />
			<img src={desktopResults} alt="Desktop Preview" />
			<img src={desktopDetail} alt="Desktop Preview" />
		</Desktop>
		<Tablet>
			<BlockInTablet>
				<img src={tabletMain} alt="Tablet Preview"></img>
				<img src={tabletDetail} alt="Tablet Preview"></img>
			</BlockInTablet>
			<img src={tabletSearch} alt="Tablet Preview"></img>
		</Tablet>
		<Mobile>
			<img src={mobileSearch} alt="Mobile Preview"></img>
			<BlockInMobile>
				<img src={mobileMain} alt="Mobile Preview"></img>
				<img src={mobileDetail} alt="Mobile Preview"></img>
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
	& > *:first-child {
		margin-bottom: 10%;
	}

	@media ${props => props.theme.m} {
		display: flex;
		justify-content: space-between;
		padding: 5%;
		& > *:first-child {
			width: 47%;
			margin: 0;
		}
	}
`;

const BlockInMobile = styled.div`
	width: 100%;
	& > *:first-child {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 47%;
		padding: 25% 0;
		img {
			height: auto;
		}
	}
`;

export default Detail;
