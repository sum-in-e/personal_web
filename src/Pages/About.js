import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import NameCard from '../components/NameCard';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Container>
				<Section>
					<Content>
						<Category>PROFILE</Category>
						<ProfileText>
							읽기 쉬운 서비스를 구현하는 것에 가치를 두는 웹 프론트엔드 개발자 김수민입니다.
							<br />
							불필요한 요소를 배제하고 직관적인 UI/UX를 적용하여 유저 입장에서 사용하기 쉬운 환경을
							제공하는 것과,
							<br />
							개발자가 보다 쉽게 구조를 파악하고 서비스를 유지보수 할 수 있도록 가독성 높은 코드를
							작성하는 것을 중요하게 생각합니다.
							<br />
							일시적으로 문제를 해결하기보다는 근본적인 원인을 찾아 이를 이해하는 것을 우선시하며,
							능동적으로 업무를 처리합니다.
							<br />
							현재는 UI/UX 디자인에 대한 이해도를 높이고 이를 바탕으로 완성도 높은 웹을 구현하는
							프론트엔드 개발자가 되는 것을 목표로 하고 있습니다.
						</ProfileText>
						<Resume to="/resume">Resume</Resume>
					</Content>
					<Content>
						<Category>이러한 것들을 중요시해요.</Category>
						<Important>
							<Block>
								<ImgWrapper>
									<Img src="https://img.icons8.com/dusk/64/000000/for-beginner.png" alt="Intutive" />
								</ImgWrapper>
								<Title>Intutive</Title>
								<Summary>쉽게 읽고 사용할 수 있는 직관적인 UI/UX</Summary>
							</Block>
							<Block>
								<ImgWrapper>
									<Img
										src="https://img.icons8.com/dusk/64/000000/minus.png"
										alt="Exclude Unnecessay Things"
									/>
								</ImgWrapper>
								<Title>Exclude Unnecessary Things</Title>
								<Summary>빠르게 원하는 정보에 도달할 수 있는 웹 구성</Summary>
							</Block>
							<Block>
								<ImgWrapper>
									<Img src="https://img.icons8.com/officel/80/000000/code.png" alt="Readable Code" />{' '}
								</ImgWrapper>
								<Title>Readable Code</Title>
								<Summary>읽기 쉬운 코드 작성</Summary>
							</Block>
							<Block>
								<ImgWrapper>
									<Img
										src="https://img.icons8.com/dusk/64/000000/social-network.png"
										alt="Connection"
									/>{' '}
								</ImgWrapper>
								<Title>Connection</Title>
								<Summary>웹을 통한 사람과 사람과의 연결</Summary>
							</Block>
						</Important>
					</Content>
					<Content>
						<Category>SKILLS</Category>
						<Skills>
							<Skill>
								<SkillImg src="https://img.icons8.com/color/96/000000/html-5.png" alt="HTML" />
								<Info>
									<Name>HTML</Name>
									<SkillSummary>
										<Li>시맨틱 마크업을 준수합니다.</Li>
									</SkillSummary>
								</Info>
							</Skill>
							<Skill>
								<SkillImg src="https://img.icons8.com/color/96/000000/css3.png" alt="CSS" />
								<Info>
									<Name>CSS</Name>
									<SkillSummary>
										<Li>BEM 방법론을 적용할 수 있습니다.</Li>
										<Li>CSS Flexbox와 Grid를 사용할 수 있습니다.</Li>
										<Li>반응형 웹을 지원할 수 있습니다.</Li>
									</SkillSummary>
								</Info>
							</Skill>
							<Skill>
								<SkillImg
									src="https://img.icons8.com/color/96/000000/javascript.png"
									alt="JavaScript"
								/>
								<Info>
									<Name>JavaScript</Name>
									<SkillSummary>
										<Li>ES6+ 이후의 문법에 익숙합니다.</Li>
										<Li>jQuery 없이 DOM에 원활하게 접근할 수 있습니다.</Li>
									</SkillSummary>
								</Info>
							</Skill>
							<Skill>
								<SkillImg src="https://img.icons8.com/plasticine/100/000000/react.png" alt="" React />
								<Info>
									<Name>React</Name>
									<SkillSummary>
										<Li>React Hooks 사용에 능숙합니다.</Li>
										<Li>컴포넌트 라이프 사이클에 대해 숙지하고 있으며, 이를 활용할 수 있습니다.</Li>
										<Li>Styled-components를 원활하게 사용할 수 있습니다.</Li>
									</SkillSummary>
								</Info>
							</Skill>
							<Skill>
								<SkillImg
									src="https://img.icons8.com/color/96/000000/typescript.png"
									alt="TypeScript"
								/>
								<Info>
									<Name>TypeScript</Name>
									<SkillSummary>
										<Li>타입의 선언 및 간단한 활용이 가능합니다.</Li>
									</SkillSummary>
								</Info>
							</Skill>
						</Skills>
					</Content>
					<Content>
						<Category>CONTACT</Category>
						<NameCardWrapper>
							<NameCard />
						</NameCardWrapper>
					</Content>
				</Section>
			</Container>
		</>
	);
};

const Container = styled.main`
	padding: 60px 250px;
	position: relative;
`;

const Section = styled.section`
	padding-top: 100px;
`;

/* --------------------------- 재사용 --------------------------- */
const Content = styled.article`
	margin-top: 100px;
`;

const Category = styled.h2`
	width: fit-content;
	padding-bottom: 15px;
	margin-bottom: 15px;
	border-bottom: 1px solid ${props => props.theme.line};
	font-size: 25px;
	font-weight: bold;
	color: black;
`;

const Summary = styled.p`
	font-size: 15px;
	color: ${props => props.theme.text};
`;

/* --------------------------- Resume --------------------------- */
const Resume = styled(Link)`
	position: absolute;
	top: 100px;
	right: 250px;
	width: fit-content;
	padding: 2px 20px;
	border: 1px solid ${props => props.theme.line};
	border-radius: 5px;
	font-size: 20px;
	color: ${props => props.theme.text};
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.main};
		border: 1px solid ${props => props.theme.main};
		color: ${props => props.theme.white};
	}
`;

/* --------------------------- PROFILE --------------------------- */
const ProfileText = styled.p`
	color: ${props => props.theme.text};
	line-height: 30px;
`;

/* --------------------------- 이러한 것들을 중요시해요. --------------------------- */
const Important = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
	gap: 20px;
`;

const Block = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 20px;
`;

const ImgWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	padding: 20px;
	margin-bottom: 25px;
	border-radius: 10px;
	transition: all 0.3s;
	&:hover {
		background-color: ${props => props.theme.main};
	}
`;

const Img = styled.img`
	width: 60px;
`;

const Title = styled.h3`
	margin-bottom: 10px;
	font-size: 22px;
	font-weight: 700;
`;

/* --------------------------- SKILLS --------------------------- */
const Skills = styled.ul`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-auto-rows: 1fr;
	gap: 25px;
`;

const Skill = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 30px;
`;

const SkillImg = styled.img`
	width: 60px;
	margin-bottom: 12px;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
`;

const Name = styled.h3`
	margin-bottom: 15px;
	font-weight: bold;
`;

const SkillSummary = styled.ul``;

const Li = styled.li`
	padding: 3px 7px;
	margin-bottom: 5px;
	border: 1px solid ${props => props.theme.line};
	border-radius: 3px;
	font-size: 15px;
	color: ${props => props.theme.text};
`;

/* --------------------------- CONTACT --------------------------- */
const NameCardWrapper = styled.div`
	margin-top: 30px;
	padding-right: 65%;
`;

export default About;
