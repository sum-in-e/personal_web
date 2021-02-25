import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Main = () => (
	<Container>
		<Navigation />
		<Section>
			<Title>{`"Less is more."`}</Title>
			<SemiTitle>쉽게 읽히는 서비스를 만들어가는 개발자 입니다.</SemiTitle>
		</Section>
	</Container>
);

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	width: 70%;
	padding: 30px;
	background-color: #f3f6f8;
`;

const Section = styled.section``;

const Title = styled.h1`
	margin-bottom: 40px;
	font-family: 'Newsreader', serif;
	font-weight: 300;
	font-size: 35px;
	font-style: italic;
`;

const SemiTitle = styled.h2`
	font-size: 20px;
`;

export default Main;
