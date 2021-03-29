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

	const giveNum = index => {
		if (portfolioData.problems.length > 1) {
			return `(${index + 1})`;
		}
		return '';
	};

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
						<Explanation>Github</Explanation>
					</Link>
					<Link href={portfolioData ? portfolioData.url : ''} target="_blank">
						<Img
							src="https://img.icons8.com/pastel-glyph/64/000000/external-link.png"
							alt="External Link"
						/>{' '}
						<Explanation>사이트로 이동</Explanation>
					</Link>
				</Links>
				<Title>{portfolioData ? portfolioData.name : ''}</Title>
				<Article>
					<Category>소개</Category>
					<Description>{portfolioData ? portfolioData.description : ''}</Description>
				</Article>
				<Article>
					<Category>사용 기술</Category>
					<Stacks>
						{portfolioData
							? portfolioData.skill.map((stack, index) => <Stack key={index}>{stack}</Stack>)
							: ''}
					</Stacks>
				</Article>
				<Article>
					<Category>키포인트</Category>
					<PointWrapper>
						{portfolioData ? portfolioData.points.map((p, index) => <Point key={index}>{p}</Point>) : ''}
					</PointWrapper>
				</Article>
				{portfolioData && portfolioData.problems
					? portfolioData.problems.map((problem, index) => (
							<Article key={index}>
								<Category>
									직면한 문제 & 개선한 방법
									{giveNum(index)}
								</Category>
								<Ul>
									<Li>
										<Problem>직면한 문제 👉🏻 {problem.issueTitle}</Problem>
										<Description>{problem.issue}</Description>
									</Li>
									<Li>
										<Problem>개선한 방법 👉🏻 {problem.solutionTitle}</Problem>
										<Description>{problem.solution}</Description>
										{problem.solutionLink ? (
											<BlogLink href={problem.solutionLink} target="_blank">
												해당 문제 개선에 대한 블로그 포스팅 확인하기
											</BlogLink>
										) : (
											''
										)}
									</Li>
								</Ul>
							</Article>
					  ))
					: ''}
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
	@media ${props => props.theme.xl} {
		padding: 90px 90px 30px 90px;
	}
	@media ${props => props.theme.xxl} {
		padding: 110px 150px 50px 150px;
	}
	@media ${props => props.theme.xxxl} {
		padding: 110px 300px 50px 300px;
	}
`;

const Section = styled.section`
	position: relative;
	padding-top: 150px;
	@media ${props => props.theme.s} {
		padding-top: 120px;
	}
	@media ${props => props.theme.l} {
		padding-top: 200px;
	}
	@media ${props => props.theme.xl} {
		padding-top: 280px;
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
	@media ${props => props.theme.l} {
		font-size: 20px;
	}
	@media ${props => props.theme.xxl} {
		font-size: 23px;
	}
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
	@media ${props => props.theme.xl} {
		transition: 0.3s ease all;

		&:hover {
			background: ${props => (props.isBookstore ? props.theme.white : props.theme.main)};
		}
	}
`;

const Img = styled.img`
	width: 25px;
	@media ${props => props.theme.xxl} {
		width: 30px;
	}
`;

const Explanation = styled.div`
	display: none;
	@media ${props => props.theme.xl} {
		display: block;
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
	}
	@media ${props => props.theme.xxl} {
		width: 130%;
	}
`;

/* ----------- Title ----------- */
const Title = styled.h1`
	margin-bottom: 50px;
	font-weight: bold;
	font-size: 32px;
	@media ${props => props.theme.xl} {
		font-size: 40px;
	}
	@media ${props => props.theme.xxl} {
		font-size: 50px;
		margin-bottom: 100px;
	}
`;

/* ----------- 소개 ----------- */
const Description = styled.p`
	white-space: pre-wrap;
	line-height: 22px;
	color: ${props => props.theme.text};
	@media ${props => props.theme.l} {
		line-height: inherit;
	}
	@media ${props => props.theme.xxl} {
		width: 90%;
	}
`;

/* ----------- Point ----------- */
const PointWrapper = styled.ul`
	margin-top: 10px;
`;

const Point = styled.li`
	line-height: 25px;
	color: ${props => props.theme.text};

	&:before {
		content: '✔';
		color: ${props => props.theme.main};
		vertical-align: middle;
		margin-right: 3px;
		font-size: 10px;
	}
	@media ${props => props.theme.l} {
		line-height: inherit;
		&:before {
			font-size: 11px;
		}
	}
	@media ${props => props.theme.xl} {
		&:before {
			font-size: 13px;
		}
	}
`;

/* ----------- Stack ----------- */
const Stacks = styled.div``;

const Stack = styled.span`
	display: inline-block;
	margin-right: 15px;
	color: ${props => props.theme.text};
`;

/* ----------- 직면한 문제 & 개선한 방법 ----------- */
const Problem = styled.p`
	padding-bottom: 10px;
	font-weight: bold;
`;

const BlogLink = styled.a`
	line-height: 30px;
	font-size: 15px;
	color: ${props => props.theme.main};
	text-decoration: underline;
`;
const Ul = styled.ul`
	list-style-type: circle;
	margin-left: 20px;
`;
const Li = styled.li`
	&:not(:first-child) {
		padding-top: 20px;
	}
`;

export default Detail;
