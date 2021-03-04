import { React } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
	const location = useLocation();
	const params = useParams();
	return (
		<Container isDetail={params.id !== undefined}>
			<Logo href="/">
				<Title>Sumin Kim</Title>
			</Logo>
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
						<GoToBlog href="https://sumpson0-0.github.io" target="blank">
							BLOG
						</GoToBlog>
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
	background-color: ${props => props.theme.white};
	box-shadow: 7px 7px 10px rgb(0 0 0 / 10%), -7px -7px 10px rgb(0 0 0 / 10%);
	font-family: 'ELAND_Choice_M';
	font-size: 20px;
	z-index: 10;
`;

/* ----------- Logo ----------- */
const Logo = styled.a`
	width: fit-content;
	cursor: pointer;
`;

const Title = styled.h1``;

/* ----------- nav ----------- */
const Nav = styled.nav``;

const Ul = styled.ul`
	display: flex;
`;

const Li = styled.li`
	margin-left: 30px;
	color: ${props => (props.isPainting ? props.theme.main : 'none')};
	cursor: pointer;
`;

const GoToLink = styled(Link)`
	font-size: 17px;
`;

const GoToBlog = styled.a`
	font-size: 17px;
`;

export default Navigation;
