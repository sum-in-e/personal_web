import React from 'react';
import styled from 'styled-components';

const Resume = () => (
	<Container>
		<File href="https://drive.google.com/file/d/122LEv2qKlFXRJA4WbKe3ASRAJk_lDRF3/view?usp=sharing" target="_blank">
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
				React 중심의 프론트엔드 개발을 해왔습니다. ES6+ 이후의 문법에 익숙하며, UI/UX 디자인에 관심이 많습니다.
				<br /> 읽기 쉬운 서비스를 구현하는 것에 가치를 두고 있습니다.
				<br />
				직관적인 UI/UX를 적용하여 유저 입장에서 사용하기 쉬운 환경을 제공하고, 개발자가 쉽게 구조를 파악하고
				서비스를 유지 보수할 수 있는 가독성 높은 코드를 작성하고자 고민합니다.
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
							To Do 기록 웹 어플리케이션입니다.
							<br /> 이메일 인증, 마이 프로필, 할 일 추가 및 편집, 삭제, 완료가 가능하며 Firebase를 이용해
							데이터 저장 및 웹 호스팅을 진행하였습니다.
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
							데이터를 받아오는 Dashboard 페이지로 구성되어 있으며, Search 기능 이용해 찾고자 하는 국가를
							검색할 수 있습니다.
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
	padding: 150px 30px 30px;
	@media ${props => props.theme.s} {
		padding: 120px 60px 30px 60px;
	}
	@media ${props => props.theme.xl} {
		padding: 150px 90px 30px 90px;
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
	@media ${props => props.theme.xl} {
		font-weight: bold;
	}
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
`;

/* ----------- Portfolio ----------- */
const Project = styled.div`
	margin-left: 15px;
	margin-bottom: 30px;
`;

const ProjectName = styled.h3`
	margin-bottom: 20px;
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

const SkillList = styled.ul`
	margin-left: 10px;
	@media ${props => props.theme.xl} {
		margin-left: 15px;
	}
`;

const Li = styled.li`
	list-style-type: disc;
	margin-left: 15px;
	margin-bottom: 20px;
`;

const SkillCategory = styled.p`
	margin-bottom: 5px;
	font-weight: bold;
	font-size: 16px;
	@media ${props => props.theme.l} {
		font-size: inherit;
	}
`;

const Skill = styled.span`
	color: ${props => props.theme.text};
`;

export default Resume;
