import React from 'react';
import styled from 'styled-components';
import NameCard from '../components/NameCard';

const About = () => (
	<>
		<Container>
			<Section>
				<Content>
					<NameCard />
				</Content>
				<Content>
					<Category>PROFILE</Category>
					<ProfileText>
						읽기 쉬운 서비스를 구현하는 것에 가치를 두는 웹 프론트엔드 엔지니어 김수민입니다.
						<br />
						불필요한 요소를 배제하고 직관적인 UI/UX를 적용하여 사용자가 빠르게 원하는 정보에 도달할 수
						있도록 하며, 직관적이고 가독성 높은 코드로 개발자가 보다 쉽게 구조를 파악하고 서비스를 유지보수
						할 수 있도록 하는 것이 중요하다고 생각합니다.
						<br />
						일시적으로 문제를 해결하기보다는 근본적인 원인을 찾아 이를 이해하는 것을 우선시하며, 다양한
						기술을 경험하는 것에 주저함이 없습니다.
						<br />
						현재는 UI/UX 디자인에 대한 이해도를 높이고 이를 바탕으로 완성도 높은 웹을 구현하는 프론트엔드
						개발자가 되는 것을 목표로 하고 있습니다.
					</ProfileText>
				</Content>
				<Content>
					<Category>이러한 것들을 중요시해요.</Category>
					<Important>
						<Block>
							<ImgWrapper>
								<Img src="https://img.icons8.com/dusk/64/000000/for-beginner.png" />
							</ImgWrapper>
							<Title>Intutive</Title>
							<Summary>쉽게 읽고 사용할 수 있는 직관적인 UI/UX</Summary>
						</Block>

						<Block>
							<ImgWrapper>
								<Img src="https://img.icons8.com/dusk/64/000000/minus.png" />
							</ImgWrapper>
							<Title>Exclude unnecessary things</Title>
							<Summary>불필요한 요소를 배제하여 빠르게 원하는 정보에 도달할 수 있는 웹 구성</Summary>
						</Block>
						<Block>
							<ImgWrapper>
								<Img src="https://img.icons8.com/officel/80/000000/code.png" />{' '}
							</ImgWrapper>
							<Title>Readable Code</Title>
							<Summary>읽기 쉬운 코드 작성</Summary>
						</Block>
						<Block>
							<ImgWrapper>
								<Img src="https://img.icons8.com/dusk/64/000000/social-network.png" />{' '}
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
							<SkillImg src="https://img.icons8.com/color/96/000000/html-5.png" />
							<Info>
								<Name>HTML</Name>
								<Summary>시맨틱태그의 중요성의 이해 및 적용</Summary>
							</Info>
						</Skill>
						<Skill>
							<SkillImg src="https://img.icons8.com/color/96/000000/css3.png" />
							<Info>
								<Name>CSS</Name>
								<Summary>Flexbox, Grid를 활용한 퍼플리싱</Summary>
							</Info>
						</Skill>
						<Skill>
							<SkillImg src="https://img.icons8.com/color/96/000000/javascript.png" />
							<Info>
								<Name>JavaScript</Name>
								<Summary>Vanilla JS, ES6 기본 문법 활용</Summary>
							</Info>
						</Skill>
						<Skill>
							<SkillImg src="https://img.icons8.com/plasticine/100/000000/react.png" />
							<Info>
								<Name>React</Name>
								<Summary>SPA, JSX, Hooks, Router 이해</Summary>
							</Info>
						</Skill>
						<Skill>
							<SkillImg src="https://img.icons8.com/color/96/000000/typescript.png" />
							<Info>
								<Name>TypeScript</Name>
								<Summary>타입 선언 및 간단한 활용</Summary>
							</Info>
						</Skill>
					</Skills>
				</Content>
			</Section>
		</Container>
	</>
);

const Container = styled.main`
	padding: 60px 250px;
`;

const Section = styled.section``;

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

/* --------------------------- Profile --------------------------- */
const ProfileText = styled.p`
	color: ${props => props.theme.text};
	line-height: 30px;
`;

/* --------------------------- Important --------------------------- */
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

const Summary = styled.p`
	font-size: 15px;
	color: ${props => props.theme.text};
`;

/* --------------------------- Skills --------------------------- */
const Skills = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, 30%);
	grid-auto-rows: 1fr;
	gap: 30px;
`;

const Skill = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 30px;
`;

const SkillImg = styled.img`
	width: 60px;
	margin-bottom: 10px;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
`;

const Name = styled.h3``;

export default About;