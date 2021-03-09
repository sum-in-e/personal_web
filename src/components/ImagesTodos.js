import React from 'react';
import styled from 'styled-components';
import desktopAuth from '../assets/images/todos/desktop-auth.png';
import desktopProfile from '../assets/images/todos/desktop-profile1.png';
import desktopProfileEdit from '../assets/images/todos/desktop-profile2.png';
import desktopMain from '../assets/images/todos/desktop-main.png';
import desktopEdit from '../assets/images/todos/desktop-edit.png';
import tabletAuth from '../assets/images/todos/tablet-auth.png';
import tabletProfile from '../assets/images/todos/tablet-profile1.png';
import tabletProfileEdit from '../assets/images/todos/tablet-profile2.png';
import tabletMain from '../assets/images/todos/tablet-main.png';
import tabletEdit from '../assets/images/todos/tablet-edit.png';
import mobileAuth from '../assets/images/todos/mobile-auth.png';
import mobileProfile from '../assets/images/todos/mobile-profile1.png';
import mobileProfileEdit from '../assets/images/todos/mobile-profile2.png';
import mobileMain from '../assets/images/todos/mobile-main.png';
import mobileEdit from '../assets/images/todos/mobile-edit.png';

const Detail = () => (
	<Container>
		<Desktop>
			<img src={desktopAuth} alt="Desktop Preview" />
			<img src={desktopProfile} alt="Desktop Preview" />
			<img src={desktopProfileEdit} alt="Desktop Preview" />
			<img src={desktopMain} alt="Desktop Preview" />
			<img src={desktopEdit} alt="Desktop Preview" />
		</Desktop>
		<Tablet>
			<BlockInTablet>
				<img src={tabletAuth} alt="Tablet Preview"></img>
				<img src={tabletProfile} alt="Tablet Preview"></img>
				<img src={tabletProfileEdit} alt="Tablet Preview"></img>
			</BlockInTablet>
			<BlockInTablet2>
				<img src={tabletMain} alt="Tablet Preview"></img>
				<img src={tabletEdit} alt="Tablet Preview"></img>
			</BlockInTablet2>
		</Tablet>
		<Mobile>
			<BlockInMobile>
				<img src={mobileAuth} alt="Mobile Preview"></img>
				<img src={mobileProfile} alt="Mobile Preview"></img>
				<img src={mobileProfileEdit} alt="Mobile Preview"></img>
			</BlockInMobile>
			<BlockInMobile2>
				<img src={mobileMain} alt="Mobile Preview"></img>
				<img src={mobileEdit} alt="Mobile Preview"></img>
			</BlockInMobile2>
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

const BlockInTablet2 = styled.div`
	width: 100%;
	& > *:first-child {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		& > *:first-child {
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
		img {
			height: auto;
		}
	}
`;

const BlockInMobile = styled.div`
	width: 100%;
	& > * {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		width: 47%;
	}
`;

const BlockInMobile2 = styled.div`
	width: 100%;

	& > *:first-child {
		margin-bottom: 10%;
	}
	@media ${props => props.theme.m} {
		width: 47%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 55% 0;
	}
`;

export default Detail;
