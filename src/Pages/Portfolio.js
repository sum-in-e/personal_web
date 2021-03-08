import React, { useEffect } from 'react';
import styled from 'styled-components';
import Preview from '../components/Preview';
import DataRepo from '../components/DataRepository';

const Portfolio = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Container>
			<PreviewList>
				{DataRepo.map((data, index) => (
					<Preview key={index} data={data} />
				))}
			</PreviewList>
		</Container>
	);
};

const Container = styled.main`
	min-height: 75vh;
	padding: 130px 30px 30px;
`;

const PreviewList = styled.section`
	width: 100%;
`;

export default Portfolio;
