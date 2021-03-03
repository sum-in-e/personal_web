import { React } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
	const location = useLocation();
	const params = useParams();
	return (
		<Container isDetail={params.id !== undefined}>
			<A href="/">
				<Title>Sumin Kim</Title>
			</A>
			{params.id === undefined ? (
				''
			) : (
				<GoBack to="/portfolio">
					<img src="https://img.icons8.com/cotton/64/000000/back.png" />
				</GoBack>
			)}
			<Nav>
				<Ul>
					<Li isPainting={location.pathname === '/'}>
						<GoToLink to="/">MAIN</GoToLink>
					</Li>
					<Li isPainting={location.pathname === '/about'}>
						<GoToLink to="/about">ABOUT</GoToLink>
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
			</Nav>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 60px;
	padding: 20px 250px;
	border-bottom: 1px solid ${props => props.theme.line};
	background-color: #ffffff;
	font-family: 'ELAND_Choice_M';
	font-size: 22px;
	z-index: 10;
`;

/* ----------- Title ----------- */
const Title = styled.h1``;

const A = styled.a`
	width: fit-content;
	cursor: pointer;
`;

const GoBack = styled(Link)`
	& > img {
		width: 40px;
		height: 40px;
	}
`;

const Nav = styled.nav``;

const Ul = styled.ul`
	display: flex;
`;

const Li = styled.li`
	margin-left: 30px;
	color: ${props => (props.isPainting ? props.theme.main : 'none')};
	cursor: pointer;
`;

const GoToLink = styled(Link)``;

export default Navigation;
