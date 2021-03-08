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
				<Article>
					<Category>소개</Category>
					<Description>{portfolioData ? portfolioData.description : ''}</Description>
					<PointWrapper>
						{portfolioData ? portfolioData.point.map((p, index) => <Point key={index}>{p}</Point>) : ''}
					</PointWrapper>
				</Article>
				<Article>
					<Category>STACKS</Category>
					<Stacks>
						{portfolioData
							? portfolioData.skill.map((stack, index) => <Stack key={index}>{stack}</Stack>)
							: ''}
					</Stacks>
				</Article>
				<Article>
					<Category>PREVIEW</Category>
					{params.id === 'wcie' ? <ImageslWcie /> : ''}
					{params.id === 'vanilla-search-movie' ? <ImagesVanillaSearchMovie /> : ''}
					{params.id === 'bookstore' ? <ImagesBookstore /> : ''}
					{params.id === 'covid19-tracking' ? <ImagesCovid19 /> : ''}
					{params.id === 'todos' ? <ImagesTodos /> : ''}
				</Article>
			</Section>
		</Container>
	);
};

const Container = styled.main`
	padding: 130px 30px 30px;
	@media ${props => props.theme.s} {
		padding: 90px 60px 30px 60px;
	}
`;

const Section = styled.section`
	position: relative;
	padding-top: 150px;
	@media ${props => props.theme.s} {
		padding-top: 120px;
	}
`;

/* ----------- 재사용 ----------- */
const Article = styled.article`
	margin-bottom: 50px;
`;

const Category = styled.h2`
	width: fit-content;
	padding-bottom: 5px;
	margin-bottom: 10px;
	border-bottom: 1px solid ${props => props.theme.line};
	font-size: 18px;
`;

/* ----------- Links ----------- */
const Links = styled.div`
	display: flex;
	justify-content: flex-end;
	position: absolute;
	top: 0;
	width: 100%;
	color: #6a737b;
	outline: none;
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
`;

const Img = styled.img`
	width: 25px;
`;

const Explanation = styled.div`
	display: none;
`;

/* ----------- Title ----------- */
const Title = styled.h1`
	margin-bottom: 50px;
	font-weight: bold;
	font-size: 32px;
`;

/* ----------- 소개 ----------- */
const Description = styled.p`
	white-space: pre-wrap;
	line-height: 22px;
	color: ${props => props.theme.text};
`;

const PointWrapper = styled.ul`
	margin-top: 10px;
`;

const Point = styled.li`
	list-style-type: disc;
	margin-left: 18px;
	line-height: 25px;
	color: ${props => props.theme.text};
`;

/* ----------- Stack ----------- */
const Stacks = styled.div``;

const Stack = styled.span`
	display: inline-block;
	margin-right: 15px;
	color: ${props => props.theme.text};
`;

export default Detail;
