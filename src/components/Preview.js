import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Preview = data => (
	<Container>
		<GoToLink to={`/portfolio/${data.data.params}`}>
			<Title>{data.data.name}</Title>
			<Keywords>
				{data.data.keyword.map((keyword, index) => (
					<Keyword key={index}>{keyword}</Keyword>
				))}
			</Keywords>
			<Images>
				<ImgWrapper isExist={data.data.deploy !== ''}>
					<Img src={data.data.deploy} alt="Deployed" />
					<Explanation>배포</Explanation>
				</ImgWrapper>
				<ImgWrapper isExist={data.data.isResponsive !== ''}>
					<Img src="https://img.icons8.com/officel/80/000000/media-queries.png" alt="Responsive" />
					<Explanation>반응형</Explanation>
				</ImgWrapper>
			</Images>
		</GoToLink>
	</Container>
);

const Container = styled.article`
	padding: 25px 0;
	border-bottom: 1px solid ${props => props.theme.line};
	cursor: pointer;
	&:first-child {
		border-top: 1px solid ${props => props.theme.line};
	}
`;

const GoToLink = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

/* --------------------------- Title --------------------------- */
const Title = styled.h2`
	font-size: 23px;
	font-weight: bold;
`;

/* --------------------------- Keywords --------------------------- */
const Keywords = styled.ul`
	padding: 20px;
	text-align: center;
`;

const Keyword = styled.li`
	display: inline-block;
	padding: 0 5px;
	font-size: 13px;
	font-weight: 400;
	&:before {
		content: '✔';
		vertical-align: middle;
		margin-right: 1px;
		font-size: 8px;
	}
`;

/* --------------------------- Images --------------------------- */
const Images = styled.ul`
	display: flex;
`;

const ImgWrapper = styled.li`
	display: ${props => (props.isExist ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	position: relative;
	width: fit-content;
	margin: 0 5px;
`;

const Img = styled.img`
	display: none;
	width: 20px;
`;

const Explanation = styled.div`
	width: 60px;
	padding: 0 8px;
	border-radius: 5px;
	background-color: ${props => props.theme.black};
	color: ${props => props.theme.white};
	font-size: 10px;
	text-align: center;
`;

export default Preview;
