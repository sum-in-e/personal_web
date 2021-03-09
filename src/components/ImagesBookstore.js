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
			<img src={desktopHome} alt="Desktop Preview" />
			<img src={desktopDetail} alt="Desktop Preview" />
			<img src={desktopSearch} alt="Desktop Preview" />
			<img src={desktopNoSearch} alt="Desktop Preview" />
		</Desktop>
		<Tablet>
			<img src={tabletHome} alt="Tablet Preview"></img>
			<img src={tabletDetail} alt="Tablet Preview"></img>
			<img src={tabletSearch} alt="Tablet Preview"></img>
		</Tablet>
		<Mobile>
			<img src={mobileHome} alt="Mobile Preview"></img>
			<img src={mobileDetail} alt="Mobile Preview"></img>
			<img src={mobileSearch} alt="Mobile Preview"></img>
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
	& > *:not(:last-child) {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		padding: 5% 25%;
		& > *:not(:last-child) {
			margin-bottom: 5%;
		}
	}
`;

/* ----------- Mobile ----------- */
const Mobile = styled.div`
	padding: 15%;
	& > *:not(:last-child) {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		padding: 5% 35%;
		& > *:not(:last-child) {
			margin-bottom: 5%;
		}
	}
`;

export default Detail;
