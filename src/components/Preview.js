import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Preview = data => (
	<GoToLink to={`/portfolio/${data.data.params}`}>
		<Container>
			<Info>
				<Name>{data.data.name}</Name>
				<ExceptName>
					<Summary>{data.data.summary}</Summary>
					<Stacks>
						{data.data.stacks.map((stack, index) => (
							<Stack key={index}>{stack}</Stack>
						))}
					</Stacks>
				</ExceptName>
			</Info>
			<PreviewImg imgPath={data.data.previewImg}></PreviewImg>
		</Container>
	</GoToLink>
);
const GoToLink = styled(Link)`
	margin-bottom: 30px;
`;

const Container = styled.article`
	display: grid;
	grid-template-columns: minmax(min-content, 1.5fr) minmax(max-content, 1fr);
	grid-template-rows: 1fr;
	height: 200px;
	border-radius: 3px;
	background-color: white;
	color: inherit;
	box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px;
	font-size: 15px;
	cursor: pointer;
`;

const PreviewImg = styled.div`
	height: auto;
	width: 100%;
	background: ${props => `url(${props.imgPath}) no-repeat center right`};
	background-size: contain;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: 20px 20px 10px 20px;
`;

const Name = styled.h2`
	margin-bottom: 5px;
	font-size: 23px;
	font-weight: 500;
`;
const ExceptName = styled.div``;

const Summary = styled.p`
	margin-bottom: 10px;
	font-weight: 400;
`;

const Stacks = styled.div``;

const Stack = styled.div`
	display: inline-block;
	width: fit-content;
	margin-right: 10px;
	margin-bottom: 10px;
	padding: 0 5px;
	border: 1px solid gray;
	border-radius: 3px;
	font-size: 13px;
	font-weight: 400;
`;

export default Preview;
