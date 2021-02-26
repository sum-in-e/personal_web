import { React } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
	const location = useLocation();
	const params = useParams();
	return (
		<Container isDetail={params.id !== undefined}>
			{params.id === undefined ? (
				''
			) : (
				<GoBack to="/portfolio">
					<img src="https://img.icons8.com/cotton/64/000000/back.png" />
				</GoBack>
			)}
			<Ul>
				<Li isPainting={location.pathname === '/'}>
					<GoToLink to="/">MAIN</GoToLink>
				</Li>
				<Li isPainting={location.pathname.includes('portfolio')}>
					<GoToLink to="/portfolio">PORTFOLIO</GoToLink>
				</Li>
				<Li>
					<a href="https://sumpson0-0.github.io" target="blank">
						BLOG
					</a>
				</Li>
				{location.pathname.includes('resume') ? (
					<Li isPainting={location.pathname.includes('resume')}>
						<GoToLink to="/private/resume">RESUME</GoToLink>
					</Li>
				) : (
					''
				)}
			</Ul>
		</Container>
	);
};

const Container = styled.nav`
	display: flex;
	justify-content: ${props => (props.isDetail ? 'space-between' : 'flex-end')};
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	width: 70%;
	height: 85px;
	padding: 20px 30px;
	background-color: #f3f6f8;
`;

const GoBack = styled(Link)`
	& > img {
		width: 40px;
		height: 40px;
	}
`;

const Ul = styled.ul`
	display: flex;
`;

const Li = styled.li`
	margin-left: 30px;
	border-bottom: 1px solid ${props => (props.isPainting ? ' black' : 'none')};
	cursor: pointer;
`;

const GoToLink = styled(Link)``;

export default Navigation;
