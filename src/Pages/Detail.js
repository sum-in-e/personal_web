import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import ImageslWcie from '../components/ImageslWcie';
import ImagesVanillaSearchMovie from '../components/ImagesVanillaSearchMovie';
import ImagesBookstore from '../components/ImagesBookstore';
import ImagesCovid19 from '../components/ImagesCovid19';
import ImagesTodos from '../components/ImagesTodos';
import DataRepo from '../components/DataRepository';

const Detail = () => {
	const params = useParams();
	const [portfolioData, setPortfolioData] = useState(null);

	useEffect(() => {
		DataRepo.forEach(data => {
			if (params.id === data.params) setPortfolioData(data);
		});
	}, []);
	return (
		<Container>
			<Navigation />
			<Section>
				<Introduction>
					<Name>{portfolioData ? portfolioData.name : ''}</Name>
					<Description>{portfolioData ? portfolioData.description : ''}</Description>
					{params.id === 'bookstore' ? (
						<Link isBookstore={params.id === 'bookstore'}>Go to Web Site</Link>
					) : (
						<Link>
							<A href={portfolioData ? portfolioData.url : ''} target="_blank">
								Go to Web Site
							</A>
						</Link>
					)}
				</Introduction>
				{params.id === 'wcie' ? <ImageslWcie /> : ''}
				{params.id === 'vanilla-search-movie' ? <ImagesVanillaSearchMovie /> : ''}
				{params.id === 'bookstore' ? <ImagesBookstore /> : ''}
				{params.id === 'covid19-tracking' ? <ImagesCovid19 /> : ''}
				{params.id === 'todos' ? <ImagesTodos /> : ''}
			</Section>
		</Container>
	);
};

const Container = styled.main`
	overflow-y: scroll;
	width: 70%;
	height: 100vh;
	padding: 30px;
	background-color: #f3f6f8;
`;

const Section = styled.section`
	margin-top: 200px;
	padding: 60px 50px;
`;

const Introduction = styled.article`
	margin-bottom: 50px;
`;

const Name = styled.h1`
	margin-bottom: 30px;
	font-family: 'Newsreader', serif;
	font-weight: 300;
	font-size: 50px;
`;

const Description = styled.p`
	margin-bottom: 80px;
	font-size: 23px;
	line-height: 40px;
`;

const Link = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	width: fit-content;
	padding: 15px 30px;
	border-radius: 3px;
	border: none;
	background: white;
	font-size: 22px;
	text-transform: uppercase;
	color: #6a737b;
	outline: none;
	transition: 800ms ease all;
	cursor: ${props => (props.isBookstore ? 'not-allowed' : 'pointer')};
	&:hover {
		background: #fff;
		color: #6a737b;
	}
	&:before,
	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		height: 2px;
		width: 0;
		background: #6a737b;
		transition: 400ms ease all;
	}
	&:after {
		right: inherit;
		top: inherit;
		left: 0;
		bottom: 0;
	}
	&:hover:before,
	&:hover:after {
		width: 100%;
		transition: 800ms ease all;
	}
`;

const A = styled.a``;

export default Detail;
