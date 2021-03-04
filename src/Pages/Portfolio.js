import React from 'react';
import styled from 'styled-components';
import Preview from '../components/Preview';
import DataRepo from '../components/DataRepository';

const Portfolio = () => (
	<Container>
		<PreviewList>
			{DataRepo.map((data, index) => (
				<Preview key={index} data={data} />
			))}
		</PreviewList>
	</Container>
);

const Container = styled.main`
	min-height: 75vh;
	display: flex;
	align-items: center;
	padding: 90px 250px 30px 250px;
`;

const PreviewList = styled.section`
	width: 100%;
`;

export default Portfolio;
