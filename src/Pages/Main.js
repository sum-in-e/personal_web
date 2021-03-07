import React from 'react';
import styled from 'styled-components';
import NameCard from '../components/NameCard';

const Main = () => (
	<Container>
		<Greeting>Hi, there!</Greeting>
		<Section>
			<NameCard />
		</Section>
	</Container>
);

const Container = styled.main`
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 100vh;
	width: 100vw;
	padding: 30px 250px;
`;

const Greeting = styled.p`
	font-family: 'ELAND_Choice_M';
	font-size: 50px;
`;

const Section = styled.section`
	position: absolute;
	bottom: -50vh;
	height: 250px;
	width: 500px;
	z-index: 5;
	-webkit-animation: rising 1s ease-in 1s forwards;
	animation: rising 0.5s ease-in 1s forwards;
	@-webkit-keyframes rising {
		0% {
			bottom: -50vh;
		}
		100% {
			bottom: 35%;
		}
	}
	@keyframes rising {
		0% {
			bottom: -50vh;
		}
		100% {
			bottom: 35%;
		}
	}
`;

export default Main;
