import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Preview = data => (
	<Container>
		<GoToLink to={`/portfolio/${data.data.params}`}>
			<Title>{data.data.name}</Title>
			<Keywords>
				{data.data.portfolio_keyword.map((keyword, index) => (
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
	border-bottom: 1px solid ${props => props.theme.line};
	&:first-child {
		border-top: 1px solid ${props => props.theme.line};
	}
`;

const GoToLink = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 25px 0;
	cursor: pointer;
	@media ${props => props.theme.l} {
		flex-direction: row;
		padding: 35px 0;
	}
	@media ${props => props.theme.xl} {
		padding: 35px 20px;
		transition: all 0.3s;
		&:hover {
			background-color: ${props => props.theme.main};
		}
	}
`;

/* --------------------------- Title --------------------------- */
const Title = styled.h2`
	font-size: 23px;
	font-weight: bold;
	@media ${props => props.theme.l} {
		width: 25%;
		font-weight: inherit;
	}
	@media ${props => props.theme.xl} {
		width: 22%;
		transition: all 0.3s;

		${Container}:hover & {
			color: ${props => props.theme.white};
		}
	}
`;

/* --------------------------- Keywords --------------------------- */
const Keywords = styled.ul`
	padding: 20px;
	text-align: center;
	@media ${props => props.theme.l} {
		width: 65%;
		padding: 0;
	}
	@media ${props => props.theme.xl} {
		width: 68%;
	}
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
	@media ${props => props.theme.l} {
		border: 1px solid ${props => props.theme.line};
		padding: 0 10px;
		margin: 5px 3px;
		border-radius: 15px;
		box-shadow: 0 1px 1px rgb(0 0 0 / 10%);

		&:before {
			content: none;
		}
	}
	@media ${props => props.theme.xl} {
		transition: all 0.3s;

		&:hover {
			transform: translateY(-5px);
		}

		${Container}:hover & {
			background-color: ${props => props.theme.white};
			border: 1px solid ${props => props.theme.main};
		}
	}
`;

/* --------------------------- Images --------------------------- */
const Images = styled.ul`
	display: flex;
	@media ${props => props.theme.l} {
		justify-content: flex-end;
		width: 10%;
	}
`;

const ImgWrapper = styled.li`
	display: ${props => (props.isExist ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	position: relative;
	width: fit-content;
	margin: 0 5px;
	@media ${props => props.theme.l} {
		padding: 5px;
		border: 1px solid ${props => props.theme.line};
		border-radius: 50%;
	}
	@media ${props => props.theme.xl} {
		padding: 8px;
		transition: all 0.3s;

		${Container}:hover & {
			background-color: ${props => props.theme.white};
			border: 1px solid ${props => props.theme.main};
		}
	}
`;

const Img = styled.img`
	display: none;
	width: 20px;
	@media ${props => props.theme.l} {
		display: block;
		width: 25px;
	}
	@media ${props => props.theme.xl} {
		width: 27px;
	}
`;

const Explanation = styled.div`
	width: 60px;
	padding: 0 8px;
	border-radius: 5px;
	background-color: ${props => props.theme.black};
	color: ${props => props.theme.white};
	font-size: 10px;
	text-align: center;
	@media ${props => props.theme.l} {
		position: absolute;
		bottom: -20px;
		opacity: 0;
	}
	@media ${props => props.theme.xl} {
		width: 110%;
		transition: all 0.3s;

		${ImgWrapper}:hover & {
			transform: translateY(10px);
			opacity: 1;
		}
	}
`;

export default Preview;
