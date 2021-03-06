import React from 'react';
import styled from 'styled-components';

const Resume = () => (
	<Container>
		<File href="https://drive.google.com/file/d/17XR0nLun078N-ZcwfNsJ8h8uVRuw65MM/view?usp=sharing" target="_blank">
			<FileImg src="https://img.icons8.com/plasticine/100/000000/pdf.png" />
			<FileName>Sumin-Kim-Resume-2021.pdf</FileName>
			<Capacity>152KB</Capacity>
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
					<Email href="mailto:sumpson00@gmail.com" title="메일 보내기">
						sumpson00@gmail.com
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
				React 중심의 프론트엔드 개발을 해왔습니다. ES6+ 이후의 문법에 익숙하며, UI/UX 디자인에 관심이 많습니다.
				<br /> 읽기 쉬운 서비스를 구현하는 것에 가치를 두고 있습니다.
				<br />
				불필요한 요소의 배제 및 직관적인 UI/UX의 적용으로 사용자에게 쾌적한 환경을 제공하고, 개발자가 쉽게
				서비스 구조를 파악하고 유지 보수할 수 있도록 가독성 높은 코드를 작성하고자 고민합니다.
				<br /> 일시적인 문제 해결 보다 근본적인 원인을 찾아 이를 이해하는 것을 우선시합니다.
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
							To Do 기록 웹 어플리케이션입니다. 이메일 인증, 마이 프로필, 할 일 추가 및 편집, 삭제, 완료가
							가능하며 Firebase를 이용해 데이터 저장 및 웹 호스팅을 진행하였습니다.
						</Summary>
					</InfoBlock>
					<InfoBlock>
						<BlockTitle>Tech Stack</BlockTitle>
						<Stack>ES6, React, Hooks, TypeScript, Styled-Components, Firebase, Git</Stack>
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
							<br /> Covid-19의 증상, 예방법을 제공하는 About 페이지와 COVID-19 Tracking API로부터 통계
							데이터를 받아오는 Dashboard 페이지로 구성되어 있으며, <br /> Search를 이용해 찾고자 하는
							국가를 검색할 수 있습니다.
						</Summary>
					</InfoBlock>
					<InfoBlock>
						<BlockTitle>Tech Stack</BlockTitle>
						<Stack>ES6, React, Hooks, Styled-Components, AWS S3, Git</Stack>
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
				<SkillList>
					<Li>
						<SkillCategory>Front-end</SkillCategory>
						<Skill>ES6, TypeScript, React, Styled-components, HTML/CSS</Skill>
					</Li>
					<Li>
						<SkillCategory>Others</SkillCategory>
						<Skill>Git/Github, Firebase</Skill>
					</Li>
				</SkillList>
			</SkillWrapper>
		</Article>
	</Container>
);

const Container = styled.main`
	position: relative;
	min-height: 75vh;
	margin: 60px 250px;
	padding-top: 100px;
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 16px;
`;

const Category = styled.h2`
	margin-bottom: 20px;
	font-weight: bold;
	font-size: 28px;
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
	position: absolute;
	top: 100px;
	right: 0;
	padding: 5px 10px;
	cursor: pointer;
	& > *:not(:first-child) {
		margin-left: 5px;
	}
	&:hover {
		background-color: #f1f3f5;
	}
`;

const FileImg = styled.img`
	width: 22px;
`;

const FileName = styled.span`
	font-weight: 300;
	font-size: 15px;
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
	margin-left: 15px;
`;

const Head = styled.span``;

const Email = styled.a`
	margin-left: 5px;
	color: ${props => props.theme.text};
`;

const Link = styled.a`
	margin-left: 5px;
	color: ${props => props.theme.text};
	text-decoration: underline;
	line-height: 30px;
`;

/* ----------- Introduce ----------- */

const Text = styled.p`
	margin-top: 30px;
	margin-left: 15px;
	color: ${props => props.theme.text};
`;

/* ----------- Portfolio ----------- */
const Project = styled.div`
	margin-left: 15px;
	margin-top: 40px;
`;

const ProjectName = styled.h3`
	margin-bottom: 20px;
	font-size: 22px;
`;

const ProjectInfo = styled.div`
	margin-left: 15px;
	padding-left: 15px;
	border-left: 1px solid ${props => props.theme.line};
`;

const InfoBlock = styled.div`
	margin-bottom: 20px;
`;

const BlockTitle = styled.p`
	margin-bottom: 5px;
	font-weight: bold;
`;

const Summary = styled.p`
	color: ${props => props.theme.text};
`;

const Stack = styled.span`
	color: ${props => props.theme.text};
`;

const ExternalLink = styled.a`
	color: ${props => props.theme.text};
	text-decoration: underline;
`;

/* ----------- Skill ----------- */

const SkillWrapper = styled.div`
	margin-top: 30px;
`;

const SkillList = styled.ul`
	margin-left: 20px;
`;

const Li = styled.li`
	list-style-type: disc;
	margin-left: 15px;
	margin-bottom: 20px;
`;

const SkillCategory = styled.p`
	margin-bottom: 5px;
	font-weight: bold;
`;

const Skill = styled.span`
	color: ${props => props.theme.text};
`;

export default Resume;
