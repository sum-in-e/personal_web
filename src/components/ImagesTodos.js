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
			<DesktopImg src={desktopAuth} alt="Desktop Preview" />
			<DesktopImg src={desktopProfile} alt="Desktop Preview" />
			<DesktopImg src={desktopProfileEdit} alt="Desktop Preview" />
			<DesktopImg src={desktopMain} alt="Desktop Preview" />
			<DesktopImg src={desktopEdit} alt="Desktop Preview" />
		</Desktop>
		<Tablet>
			<BlockInTablet>
				<TabletImg src={tabletAuth} alt="Tablet Preview"></TabletImg>
				<TabletImg src={tabletProfile} alt="Tablet Preview"></TabletImg>
				<TabletImg src={tabletProfileEdit} alt="Tablet Preview"></TabletImg>
			</BlockInTablet>
			<BlockInTablet2>
				<TabletImg src={tabletMain} alt="Tablet Preview"></TabletImg>
				<TabletImg src={tabletEdit} alt="Tablet Preview"></TabletImg>
			</BlockInTablet2>
		</Tablet>
		<Mobile>
			<BlockInMobile2>
				<MobileImg src={mobileMain} alt="Mobile Preview"></MobileImg>
				<MobileImg src={mobileEdit} alt="Mobile Preview"></MobileImg>
			</BlockInMobile2>
			<BlockInMobile>
				<MobileImg src={mobileAuth} alt="Mobile Preview"></MobileImg>
				<MobileImg src={mobileProfile} alt="Mobile Preview"></MobileImg>
				<MobileImg src={mobileProfileEdit} alt="Mobile Preview"></MobileImg>
			</BlockInMobile>
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
	width: 47%;
	& > * {
		margin-bottom: 50px;
		width: 100%;
	}

	& > *:last-child {
		margin-bottom: 0;
	}
`;

const BlockInTablet2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 100px 0;
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
	width: 35%;
	& > * {
		margin-bottom: 50px;
		width: 100%;
	}
	& > *:last-child {
		margin-bottom: 0;
	}
`;

const BlockInMobile2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 100px 0;
	width: 35%;
	& > * {
		width: 100%;
	}
	& > *:first-child {
		margin-bottom: 50px;
	}
`;

export default Detail;
