import React from 'react';
import styled from 'styled-components';
import NameCard from '../components/NameCard';

const Main = () => (
	<Container>
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
	@media ${props => props.theme.xl} {
		padding: 90px 90px 30px 90px;
	}
	@media ${props => props.theme.xxl} {
		padding: 110px 150px 50px 150px;
	}
`;

const Section = styled.section`
	height: 300px;
	width: 100%;

	@media ${props => props.theme.s} {
		height: 230px;
		width: 60%;
	}
	@media ${props => props.theme.l} {
		height: 250px;
		width: 47%;
	}
	@media ${props => props.theme.xl} {
		width: 42%;
	}
	@media ${props => props.theme.xxl} {
		height: 270px;
		width: 40%;
	}
`;

export default Main;
