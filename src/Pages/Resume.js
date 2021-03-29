import React from 'react';
import styled from 'styled-components';
import Skills from '../components/Skills';

const Resume = () => (
	<Container>
		<File href="https://drive.google.com/file/d/1i65mgcJLyugRdMS2eCEq3p7V3v5BaADX/view?usp=sharing" target="_blank">
			<FileImg src="https://img.icons8.com/plasticine/100/000000/pdf.png" />
			<FileName>Sumin-Kim-Resume-2021.pdf</FileName>
			<Capacity>63KB</Capacity>
		</File>
		<TitleWrapper>
			<Title>김 수 민</Title>
			<SubTitle>Front-end Developer</SubTitle>
		</TitleWrapper>
		<Article>
			<Contact>
				<SmallCategory>Contact</SmallCategory>
				<Block>
					<Head>Email.</Head>
					<Email href="mailto:suminkim.me@gmail.com" title="메일 보내기">
						suminkim.me@gmail.com
					</Email>
				</Block>
			</Contact>
			<Contact>
				<SmallCategory>Channel</SmallCategory>
				<Block>
					<Head>Github.</Head>
					<Link href="https://github.com/sumpson0-0" target="_blank" title="깃헙으로 이동">
						https://github.com/sumpson0-0
					</Link>
				</Block>
				<Block>
					<Head>Homepage.</Head>
					<Link href="https://sumin-kim.web.app/" target="_blank" title="개인 홈페이지로 이동">
						https://sumin-kim.web.app/
					</Link>
				</Block>
				<Block>
					<Head>Blog.</Head>
					<Link href="https://sumpson0-0.github.io" target="_blank" title="블로그로 이동">
						https://sumpson0-0.github.io
					</Link>
				</Block>
			</Contact>
		</Article>
		<Article>
			<Category>Introduce</Category>
			<Text>
				React 중심의 프론트엔드 개발을 해왔으며, 읽기 쉬운 서비스를 구현하는 것에 가치를 두고 있습니다. <br />
				직관적인 UI/UX를 적용하여 사용자의 접근성을 높이고, 개발자가 보다 쉽게 서비스 구조를 파악할 수 있도록
				가독성 높은 코드를 작성하고자 고민합니다.
				<br />
				일시적으로 문제를 해결하기보다는 근본적인 원인을 찾아 이를 이해하는 것을 우선시하며, 능동적으로 업무를
				처리합니다.
				<br />
				현재는 UI/UX 디자인에 대한 이해도를 높이고, 이를 바탕으로 사용자 입장에서 매력적으로 다가오는 웹을
				구현하는 프론트엔드 개발자를 목표로 하고 있습니다.
			</Text>
		</Article>
		<Article>
			<Category>Portfolio</Category>
			<Project>
				<ProjectName>Todos</ProjectName>
				<ProjectInfo>
					<InfoBlock>
						<BlockTitle>Description</BlockTitle>
						<Summary>
							React와 TypeScript를 결합해 만든 To Do 기록 웹 어플리케이션입니다.
							<br />
							Firebase를 통한 유저 인증 및 데이터 CRUD를 구현하였고, Context API + useReducer(Hooks)
							조합을 이용한 전역 상태 관리를 진행하였습니다.
							<br />
							또한 모바일과 데스크탑에 대응할 수 있도록 반응형 웹으로 설계되었습니다.
						</Summary>
					</InfoBlock>
					<InfoBlock>
						<BlockTitle>Tech Stack</BlockTitle>
						<Stack>TypeScript, React, Hooks, ES6, Styled-Components, Firebase, Git</Stack>
					</InfoBlock>
					<InfoBlock>
						<BlockTitle>Link</BlockTitle>
						<ExternalLink href="https://todos-11f5b.web.app/" title="사이트로 이동" target="_blank">
							https://todos-11f5b.web.app/
						</ExternalLink>
					</InfoBlock>
				</ProjectInfo>
			</Project>
			<Project>
				<ProjectName>Covid-19 Tracking</ProjectName>
				<ProjectInfo>
					<InfoBlock>
						<BlockTitle>Description</BlockTitle>
						<Summary>
							한국 및 주요 국가들의 Covid-19 현황과 전 세계 통계를 볼 수 있는 웹사이트입니다.
							<br />
							Fetch를 통해 API 요청으로 데이터를 받아오며, Async/Await을 이용해 비동기적으로 로직을
							수행합니다.
							<br />
							모바일과 데스크탑에 대응할 수 있도록 반응형 웹으로 설계되었습니다.
						</Summary>
					</InfoBlock>
					<InfoBlock>
						<BlockTitle>Tech Stack</BlockTitle>
						<Stack>React, Hooks, ES6, Styled-Components, AWS S3, Git</Stack>
					</InfoBlock>
					<InfoBlock>
						<BlockTitle>Link</BlockTitle>
						<ExternalLink
							href="http://covid19-korea.s3-website.ap-northeast-2.amazonaws.com/"
							title="사이트로 이동"
							target="_blank"
						>
							http://covid19-korea.s3-website.ap-northeast-2.amazonaws.com/
						</ExternalLink>
					</InfoBlock>
				</ProjectInfo>
			</Project>
		</Article>
		<Article>
			<Category>Skill</Category>
			<SkillWrapper>
				<Skills />
			</SkillWrapper>
		</Article>
	</Container>
);

const Container = styled.main`
	position: relative;
	padding: 150px 30px 30px;
	@media ${props => props.theme.s} {
		padding: 120px 60px 30px 60px;
	}
	@media ${props => props.theme.xl} {
		padding: 150px 90px 30px 90px;
	}
	@media ${props => props.theme.xxl} {
		padding: 150px 150px 30px 150px;
	}
	@media ${props => props.theme.xxxl} {
		padding: 150px 300px 30px 300px;
	}
`;

const Category = styled.h2`
	margin-bottom: 25px;
	font-weight: bold;
	font-size: 25px;
	color: ${props => props.theme.main};
`;

const Article = styled.article`
	margin-bottom: 40px;
	padding-bottom: 40px;
	&:not(:last-child) {
		border-bottom: 1px solid ${props => props.theme.line};
	}
`;

/* ----------- File ----------- */
const File = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 20px;
	width: calc(100% - 60px);
	padding: 10px;
	background-color: #f1f3f5;
	cursor: pointer;
	& > *:not(:first-child) {
		margin-left: 5px;
	}
	@media ${props => props.theme.s} {
		width: calc(100% - 120px);
	}
	@media ${props => props.theme.l} {
		right: 60px;
		top: 120px;
		width: fit-content;
		height: fit-content;
		padding: 5px 20px;
	}
	@media ${props => props.theme.xl} {
		right: 90px;
		top: 150px;
		padding: 5px 10px;
		background-color: inherit;
		&:hover {
			background-color: #f1f3f5;
		}
	}
	@media ${props => props.theme.xxl} {
		right: 150px;
	}
	@media ${props => props.theme.xxxl} {
		right: 300px;
	}
`;

const FileImg = styled.img`
	width: 22px;
	@media ${props => props.theme.l} {
		width: 20px;
	}
`;

const FileName = styled.span`
	font-weight: 300;
	font-family: 'sans-serif';
	@media ${props => props.theme.l} {
		font-size: 15px;
	}
	@media ${props => props.theme.xl} {
		font-size: 16px;
	}
`;

const Capacity = styled.span`
	font-size: 10px;
	color: ${props => props.theme.text};
`;

/* ----------- TitleWrapper ----------- */
const TitleWrapper = styled.div`
	margin-bottom: 50px;
`;

const Title = styled.h1`
	margin-bottom: 15px;
	font-size: 40px;
`;

const SubTitle = styled.p`
	margin-left: 2px;
	font-size: 14px;
	color: ${props => props.theme.text};
`;

/* ----------- Info ----------- */
const SmallCategory = styled.h3`
	margin-bottom: 5px;
	font-weight: bold;
	font-size: 20px;
`;

const Contact = styled.div`
	margin-bottom: 20px;
`;

const Block = styled.div`
	@media ${props => props.theme.xl} {
		margin-left: 15px;
	}
`;

const Head = styled.span`
	font-weight: bold;
`;

const Email = styled.a`
	margin-left: 5px;
	color: ${props => props.theme.text};
`;

const Link = styled.a`
	margin-left: 5px;
	color: ${props => props.theme.text};
	text-decoration: underline;
	line-height: 25px;
`;

/* ----------- Introduce ----------- */

const Text = styled.p`
	color: ${props => props.theme.text};
	@media ${props => props.theme.xl} {
		margin-left: 15px;
	}
	@media ${props => props.theme.xxl} {
		width: 90%;
	}
`;

/* ----------- Portfolio ----------- */
const Project = styled.div`
	margin-left: 15px;
	margin-bottom: 30px;
`;

const ProjectName = styled.h3`
	margin-bottom: 20px;
	font-weight: bold;
	font-size: 22px;
`;

const ProjectInfo = styled.div`
	padding-left: 15px;
	border-left: 1px solid ${props => props.theme.line};
`;

const InfoBlock = styled.div`
	margin-bottom: 25px;
`;

const BlockTitle = styled.p`
	margin-bottom: 5px;
	font-weight: bold;
`;

const Summary = styled.p`
	color: ${props => props.theme.text};
	@media ${props => props.theme.xxl} {
		width: 90%;
	}
`;

const Stack = styled.span`
	color: ${props => props.theme.text};
`;

const ExternalLink = styled.a`
	color: ${props => props.theme.text};
	text-decoration: underline;
`;

/* ----------- Skill ----------- */

const SkillWrapper = styled.div``;

export default Resume;
