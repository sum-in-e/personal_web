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
	padding: 130px 30px 30px;
	@media ${props => props.theme.s} {
		padding: 90px 60px 30px 60px;
	}
	@media ${props => props.theme.m} {
		min-height: calc(100vh - 160px);
	}
	@media ${props => props.theme.l} {
		display: flex;
		align-items: center;
	}
	@media ${props => props.theme.xl} {
		padding: 90px 90px 30px 90px;
	}
	@media ${props => props.theme.xxl} {
		padding: 110px 250px 50px 250px;
	}
`;

const PreviewList = styled.section`
	width: 100%;
`;

export default Portfolio;
