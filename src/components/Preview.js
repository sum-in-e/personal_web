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
	width: 100%;
	padding: 20px 0;
	border-bottom: 1px solid ${props => props.theme.line};
	cursor: pointer;
	transition: all 0.3s;
	&:first-child {
		border-top: 1px solid ${props => props.theme.line};
	}
	&:hover {
		background-color: ${props => props.theme.main};
	}
`;

const GoToLink = styled(Link)`
	display: flex;
	align-items: center;
	padding: 10px;
`;

/* --------------------------- Title --------------------------- */
const Title = styled.h2`
	width: 30%;
	margin-bottom: 5px;
	font-size: 23px;
	font-weight: 500;
	transition: all 0.3s;

	${Container}:hover & {
		color: ${props => props.theme.white};
	}
`;

/* --------------------------- Keywords --------------------------- */
const Keywords = styled.div`
	width: 55%;
`;

const Keyword = styled.div`
	display: inline-block;
	width: fit-content;
	padding: 0 10px;
	margin: 3px;
	border: 1px solid ${props => props.theme.line};
	border-radius: 15px;
	box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
	font-size: 13px;
	font-weight: 400;
	transition: all 0.3s;

	&:hover {
		transform: translateY(-5px);
	}

	${Container}:hover & {
		background-color: ${props => props.theme.white};
		border: 1px solid ${props => props.theme.main};
	}
`;

/* --------------------------- Images --------------------------- */
const Images = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 15%;
`;
const ImgWrapper = styled.div`
	display: ${props => (props.isExist ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	position: relative;
	width: fit-content;
	padding: 8px;
	margin-left: 10px;
	border: 1px solid ${props => props.theme.line};
	border-radius: 50%;
	transition: all 0.3s;

	${Container}:hover & {
		background-color: ${props => props.theme.white};
		border: 1px solid ${props => props.theme.main};
	}
`;

const Img = styled.img`
	width: 30px;
`;

const Explanation = styled.div`
	position: absolute;
	bottom: -20px;
	border-radius: 5px;
	background-color: ${props => props.theme.black};
	color: ${props => props.theme.white};
	font-size: 10px;
	padding: 0 8px;
	transition: all 0.3s;
	opacity: 0;

	${ImgWrapper}:hover & {
		transform: translateY(10px);
		opacity: 1;
	}
`;

export default Preview;
