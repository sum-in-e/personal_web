import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Skills from '../components/Skills';
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
						<Category>안녕하세요, 김수민입니다.</Category>
						<ProfileText>
							읽기 쉬운 서비스를 구현하는 것에 가치를 두고 있습니다.
							<br />
							직관적인 UI/UX를 적용하여 사용자의 접근성을 높이고, 개발자가 보다 쉽게 서비스 구조를 파악할
							수 있도록 가독성 높은 코드를 작성하고자 고민합니다. 일시적으로 문제를 해결하기보다는
							근본적인 원인을 찾아 이를 이해하는 것을 우선시하며, 능동적으로 업무를 처리합니다.
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
									<Img src="https://img.icons8.com/dusk/64/000000/template.png" />
								</ImgWrapper>
								<Title>Intutive</Title>
								<Summary>쉽게 읽고 사용할 수 있는 직관적인 UI/UX</Summary>
							</Block>
							<Block>
								<ImgWrapper>
									<Img src="https://img.icons8.com/plasticine/100/000000/code-file.png" />
								</ImgWrapper>
								<Title>Readable Code</Title>
								<Summary>읽기 쉬운 코드 작성</Summary>
							</Block>
							<Block>
								<ImgWrapper>
									<Img src="https://img.icons8.com/dusk/64/000000/upgrade.png" />{' '}
								</ImgWrapper>
								<Title>Improvement</Title>
								<Summary>문제 개선에 대한 의지</Summary>
							</Block>
						</Important>
					</Content>
					<Content>
						<Category>SKILLS</Category>
						<Skills />
					</Content>
					<Content>
						<Category>CONTACT</Category>
						<ContactText>
							저와 이야기를 나누고 싶으시다면 메일을 보내주세요.
							<br />
							빠른 시일 내에 답장을 드리겠습니다.
						</ContactText>
						<FormWrapper>
							<EmailForm />
						</FormWrapper>
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
	@media ${props => props.theme.xl} {
		padding: 90px 90px 30px 90px;
	}
	@media ${props => props.theme.xxl} {
		padding: 90px 150px 30px 150px;
	}
	@media ${props => props.theme.xxl} {
		padding: 110px 150px 50px 150px;
	}
	@media ${props => props.theme.xxxl} {
		padding: 110px 300px 50px 300px;
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
	@media ${props => props.theme.xl} {
		padding-top: 120px;
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
	}
	@media ${props => props.theme.l} {
		padding: 2px 0px;
	}
	@media ${props => props.theme.xl} {
		right: 90px;
		transition: all 0.3s;

		&:hover {
			background-color: ${props => props.theme.main};
			border: 1px solid ${props => props.theme.main};
			color: ${props => props.theme.white};
		}
	}
	@media ${props => props.theme.xxl} {
		top: 110px;
		right: 150px;
		width: 120px;
		padding: 5px 15px;
		font-size: 20px;
	}
	@media ${props => props.theme.xxxl} {
		right: 300px;
	}
`;

/* --------------------------- PROFILE --------------------------- */
const ProfileText = styled.p`
	line-height: 22px;
	word-break: normal;
	color: ${props => props.theme.text};
	@media ${props => props.theme.l} {
		line-height: inherit;
	}
	@media ${props => props.theme.xxl} {
		width: 90%;
	}
`;

/* --------------------------- 이러한 것들을 중요시해요. --------------------------- */
const Important = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(1, 1fr);

	@media ${props => props.theme.m} {
		grid-template-rows: auto;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
	@media ${props => props.theme.xl} {
		padding: 0 50px;
	}
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

	@media ${props => props.theme.xl} {
		margin-bottom: 5px;
		border-radius: 10px;
		transition: all 0.3s;
		&:hover {
			background-color: ${props => props.theme.main};
		}
	}
`;

const Img = styled.img`
	width: 55px;
`;

const Title = styled.h3`
	margin-bottom: 10px;
	font-size: 17px;
	font-weight: 700;
`;

const Summary = styled.p`
	font-size: 14px;
	color: ${props => props.theme.text};
	@media ${props => props.theme.l} {
		font-size: 15px;
	}
`;

/* --------------------------- CONTACT --------------------------- */

const ContactText = styled.p`
	font-size: 13px;
	color: ${props => props.theme.text};
	@media ${props => props.theme.m} {
		font-size: inherit;
	}
`;

const FormWrapper = styled.div``;

export default About;
