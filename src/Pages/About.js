import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmailForm from '../components/EmailForm';

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
							직관적인 UI/UX를 적용하여 유저 입장에서 사용하기 쉬운 환경을 제공하고, 개발자가 쉽게 구조를
							파악하고 서비스를 유지 보수할 수 있는 가독성 높은 코드를 작성하고자 고민합니다.
							<br />
							일시적으로 문제를 해결하기보다는 근본적인 원인을 찾아 이를 이해하는 것을 우선시하며,
							능동적으로 업무를 처리합니다.
							<br />
							현재는 UI/UX 디자인에 대한 이해도를 높이고, 이를 바탕으로 사용자 입장에서 매력적으로
							다가오는 웹을 구현하는 프론트엔드 개발자를 목표로 하고 있습니다.
						</ProfileText>
						<Resume to="/about/resume">Resume</Resume>
					</Content>
					<Content>
						<Category>이러한 것들을 중요시해요.</Category>
						<Important>
							<Block>
								<ImgWrapper>
									<Img src="https://img.icons8.com/dusk/64/000000/template.png" />{' '}
									{/* 									<Img src="https://img.icons8.com/dusk/64/000000/for-beginner.png" alt="Intutive" />
									 */}{' '}
								</ImgWrapper>
								<Title>Intutive</Title>
								<Summary>쉽게 읽고 사용할 수 있는 직관적인 UI/UX</Summary>
							</Block>
							<Block>
								<ImgWrapper>
									<Img src="https://img.icons8.com/plasticine/100/000000/code-file.png" />
									{/* 									<Img src="https://img.icons8.com/office/80/000000/code.png" />{' '}
									 */}{' '}
								</ImgWrapper>
								<Title>Readable Code</Title>
								<Summary>읽기 쉬운 코드 작성</Summary>
							</Block>
							<Block>
								<ImgWrapper>
									<Img
										src="https://img.icons8.com/plasticine/100/000000/administrative-tools.png"
										alt="Exclude Unnecessay Things"
									/>
								</ImgWrapper>
								<Title>Stability</Title>
								<Summary>서비스 안정성</Summary>
							</Block>
							<Block>
								<ImgWrapper>
									<Img
										src="https://img.icons8.com/plasticine/100/000000/conference.png"
										alt="Connection"
									/>{' '}
								</ImgWrapper>
								<Title>Communication</Title>
								<Summary>원활한 의사소통</Summary>
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
						<ContactText>
							저와 이야기를 나누고 싶으시다면 메일을 보내주세요.
							<br />
							빠른 시일 내에 답장을 드리겠습니다.
						</ContactText>
						<EmailForm />
					</Content>
				</Section>
			</Container>
		</>
	);
};

const Container = styled.main`
	padding: 130px 30px 30px;
	position: relative;
	@media ${props => props.theme.s} {
		padding: 90px 60px 30px 60px;
	}
`;

const Section = styled.section`
	padding-top: 70px;
	@media ${props => props.theme.s} {
		padding-top: 30px;
	}
	@media ${props => props.theme.m} {
		padding-top: 70px;
	}
`;

/* --------------------------- 재사용 --------------------------- */
const Content = styled.article`
	margin-top: 80px;
`;

const Category = styled.h2`
	width: fit-content;
	padding-bottom: 5px;
	margin-bottom: 15px;
	border-bottom: 1px solid ${props => props.theme.line};
	font-size: 25px;
	font-weight: bold;
	color: ${props => props.theme.black};
	@media ${props => props.theme.m} {
		font-size: 22px;
	}
`;

const Summary = styled.p`
	font-size: 14px;
	color: ${props => props.theme.text};
`;

/* --------------------------- Resume --------------------------- */
const Resume = styled(Link)`
	position: absolute;
	top: 130px;
	right: 30px;
	width: 100px;
	padding: 2px 0px;
	border: 1px solid ${props => props.theme.line};
	border-radius: 5px;
	text-align: center;
	font-size: 17px;
	color: ${props => props.theme.text};
	cursor: pointer;
	@media ${props => props.theme.s} {
		top: 90px;
		right: 60px;
		font-size: 20px;
		padding: 5px 0px;
	}
	@media ${props => props.theme.m} {
		font-size: 18px;
		padding: 5px 0px;
	}
`;

/* --------------------------- PROFILE --------------------------- */
const ProfileText = styled.p`
	line-height: 22px;
	word-break: normal;
	color: ${props => props.theme.text};
`;

/* --------------------------- 이러한 것들을 중요시해요. --------------------------- */
const Important = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(2, 1fr);
`;

const Block = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 10px;
`;

const ImgWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	padding: 20px;
`;

const Img = styled.img`
	width: 55px;
	&:first {
		width: 45px;
	}
`;

const Title = styled.h3`
	margin-bottom: 10px;
	font-size: 17px;
	font-weight: 700;
`;

/* --------------------------- SKILLS --------------------------- */
const Skills = styled.ul`
	display: grid;
	grid-template-rows: repeat(5, auto);
	grid-template-columns: 1fr;
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
	text-align: center;
`;

const Name = styled.h3`
	margin-bottom: 15px;
	font-weight: bold;
	font-size: 17px;
`;

const SkillSummary = styled.ul``;

const Li = styled.li`
	margin-bottom: 5px;
	color: ${props => props.theme.text};

	&:before {
		content: '✔';
		vertical-align: middle;
		margin-right: 3px;
		font-size: 10px;
	}
`;

/* --------------------------- CONTACT --------------------------- */

const ContactText = styled.p`
	font-size: 13px;
	color: ${props => props.theme.text};
`;

export default About;
