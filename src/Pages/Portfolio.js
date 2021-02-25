import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Preview from '../components/Preview';
import DataRepo from '../components/DataRepository';

const Portfolio = () => (
	<Container>
		<Navigation />
		<Wrapper>
			<PreviewList>
				{DataRepo.map((data, index) => (
					<Preview key={index} data={data} />
				))}
			</PreviewList>
		</Wrapper>
	</Container>
);

const Container = styled.main`
	overflow-y: scroll;
	width: 70%;
	height: 100vh;
	padding: 30px;
	background-color: #f3f6f8;
`;

const Wrapper = styled.section`
	padding: 60px 15%;
`;

const PreviewList = styled.div`
	display: flex;
	flex-direction: column;
`;

export default Portfolio;
