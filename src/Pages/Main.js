import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Main = () => (
	<Container>
		<Navigation />
		<Summary>
			<TitleWrapper>
				<Title>{`"Less is more."`}</Title>
				<SemiTitle>쉽게 읽히는 서비스를 만들어가는 개발자 입니다.</SemiTitle>
			</TitleWrapper>
		</Summary>
	</Container>
);

const Container = styled.main`
	height: 100vh;
	width: 70%;
	padding: 30px 40px;
	background-color: #e1e8ed;
	background-color: #f3f6f8;
`;

const Summary = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;

	& > * {
		width: 80%;
	}
`;

const TitleWrapper = styled.div`
	margin-bottom: 60px;
`;

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
