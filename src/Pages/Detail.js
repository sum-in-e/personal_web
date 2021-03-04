import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
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
		window.scrollTo(0, 0);
	}, []);
	return (
		<Container>
			<Section>
				<Links>
					<Link href={portfolioData ? portfolioData.githubLink : ''} target="_blank">
						<Img src="https://img.icons8.com/ios-filled/100/000000/github-2.png" alt="Github" />{' '}
						<Explanation>Github Link</Explanation>
					</Link>
					{params.id === 'bookstore' ? (
						<Link isBookstore={params.id === 'bookstore'}>
							<Img
								src="https://img.icons8.com/pastel-glyph/64/000000/external-link.png"
								alt="External Link"
							/>{' '}
							<Explanation>사이트로 이동</Explanation>
						</Link>
					) : (
						<Link href={portfolioData ? portfolioData.url : ''} target="_blank">
							<Img
								src="https://img.icons8.com/pastel-glyph/64/000000/external-link.png"
								alt="External Link"
							/>{' '}
							<Explanation>사이트로 이동</Explanation>
						</Link>
					)}
				</Links>
				<Title>{portfolioData ? portfolioData.name : ''}</Title>
				<Introduction>
					<Category>소개</Category>
					<Description>{portfolioData ? portfolioData.description : ''}</Description>
					<PointWrapper>
						{portfolioData
							? portfolioData.point.map((p, index) => (
									<Point key={index}>
										{index + 1}. {p}
									</Point>
							  ))
							: ''}
					</PointWrapper>
				</Introduction>
				<Introduction>
					<Category>STACKS</Category>
					<Stacks>
						{portfolioData
							? portfolioData.skill.map((stack, index) => <Stack key={index}>{stack}</Stack>)
							: ''}
					</Stacks>
				</Introduction>
				<Preview>
					<Category>PREVIEW</Category>
					{params.id === 'wcie' ? <ImageslWcie /> : ''}
					{params.id === 'vanilla-search-movie' ? <ImagesVanillaSearchMovie /> : ''}
					{params.id === 'bookstore' ? <ImagesBookstore /> : ''}
					{params.id === 'covid19-tracking' ? <ImagesCovid19 /> : ''}
					{params.id === 'todos' ? <ImagesTodos /> : ''}
				</Preview>
			</Section>
		</Container>
	);
};

const Container = styled.main`
	padding: 60px 250px;
`;

const Section = styled.section`
	position: relative;
	padding: 300px 0 50px 0;
`;

/* ----------- Links ----------- */
const Links = styled.div`
	display: flex;
	justify-content: flex-end;
	position: absolute;
	top: 30px;
	right: 0;
	width: 100%;
	color: #6a737b;
	outline: none;
	transition: 800ms ease all;
`;

const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin-left: 15px;
	padding: 10px;
	border: 1px solid ${props => props.theme.main};
	border-radius: 50%;
	cursor: ${props => (props.isBookstore ? 'not-allowed' : 'pointer')};
	&:hover {
		background: ${props => (props.isBookstore ? props.theme.white : props.theme.main)};
	}
`;

const Img = styled.img`
	width: 25px;
`;

const Explanation = styled.div`
	position: absolute;
	bottom: -10px;
	width: 150%;
	border-radius: 5px;
	background-color: ${props => props.theme.black};
	color: ${props => props.theme.white};
	text-align: center;
	font-size: 10px;
	transition: all 0.3s;
	opacity: 0;

	${Link}:hover & {
		transform: translateY(20px);
		opacity: 1;
	}
`;

/* ----------- Title ----------- */
const Title = styled.h1`
	margin-bottom: 100px;
	font-weight: 500;
	font-size: 60px;
`;

/* ----------- Introduction ----------- */
const Introduction = styled.article`
	margin-bottom: 50px;
`;

const Category = styled.h2`
	width: fit-content;
	padding-bottom: 5px;
	margin-bottom: 10px;
	border-bottom: 1px solid ${props => props.theme.line};
	font-size: 22px;
`;

/* ----------- 소개 ----------- */
const Description = styled.p`
	font-size: 17px;
	white-space: pre-wrap;
	line-height: 32px;
	color: ${props => props.theme.text};
`;

const PointWrapper = styled.div`
	padding-left: 10px;
	margin-top: 10px;
`;

const Point = styled.p`
	font-size: 17px;
	white-space: pre-wrap;
	line-height: 32px;
	color: ${props => props.theme.text};
`;

/* ----------- Stack ----------- */
const Stacks = styled.div``;

const Stack = styled.span`
	margin-right: 15px;
	font-size: 17px;
	color: ${props => props.theme.text};
`;

/* ----------- Preview ----------- */
const Preview = styled.article``;

export default Detail;
