import React from 'react';
import styled from 'styled-components';

const Skills = () => (
	<Container>
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
					<Li>반응형 웹을 지원할 수 있습니다.</Li>
					<Li>CSS Flexbox와 Grid를 사용할 수 있습니다.</Li>
					<Li>BEM 방법론을 적용할 수 있습니다.</Li>
				</SkillSummary>
			</Info>
		</Skill>
		<Skill>
			<SkillImg src="https://img.icons8.com/color/96/000000/javascript.png" alt="JavaScript" />
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
			<SkillImg src="https://img.icons8.com/color/96/000000/typescript.png" alt="TypeScript" />
			<Info>
				<Name>TypeScript</Name>
				<SkillSummary>
					<Li>타입의 선언 및 간단한 활용이 가능합니다.</Li>
				</SkillSummary>
			</Info>
		</Skill>
		<Skill>
			<SkillImg src="https://img.icons8.com/ios-filled/100/000000/git.png" alt="" React />
			<Info>
				<Name>Git/Github</Name>
				<SkillSummary>
					<Li>Git을 활용한 버전관리에 익숙합니다.</Li>
				</SkillSummary>
			</Info>
		</Skill>
	</Container>
);

const Container = styled.ul`
	display: grid;
	grid-template-rows: repeat(6, auto);
	grid-template-columns: 1fr;
	gap: 25px;
	@media ${props => props.theme.l} {
		grid-template-rows: repeat(2, auto);
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
	}
	@media ${props => props.theme.xxl} {
		gap: 15px;
	}
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
	width: 100%;
	text-align: center;
`;

const Name = styled.h3`
	margin-bottom: 15px;
	font-weight: bold;
	font-size: 17px;
`;

const SkillSummary = styled.ul`
	@media ${props => props.theme.l} {
		width: 85%;
		margin: 0 auto;
		font-size: 15px;
	}
	@media ${props => props.theme.xl} {
		width: 90%;
	}
`;

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

export default Skills;
