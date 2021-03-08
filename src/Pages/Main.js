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
	height: 100vh;
	padding: 130px 30px 30px;
	@media ${props => props.theme.s} {
		padding: 90px 60px 30px 60px;
	}
`;

const Greeting = styled.p`
	display: none;
	font-family: 'ELAND_Choice_M';
`;

const Section = styled.section`
	height: 300px;
	width: 100%;

	@media ${props => props.theme.s} {
		height: 230px;
		width: 60%;
	}
`;

export default Main;
