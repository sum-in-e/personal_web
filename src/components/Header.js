import { React } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
	const location = useLocation();
	const params = useParams();
	return (
		<Container isDetail={params.id !== undefined}>
			<Logo href="/">
				<Title>SUMIN KIM</Title>
			</Logo>
			<Nav>
				<Ul>
					<Li isPainting={location.pathname === '/'}>
						<GoToLink to="/">MAIN</GoToLink>
					</Li>
					<Li isPainting={location.pathname.includes('about')}>
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
				</Ul>
			</Nav>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100px;
	padding: 15px 30px;
	background-color: ${props => props.theme.white};
	box-shadow: 7px 7px 10px rgb(0 0 0 / 10%), -7px -7px 10px rgb(0 0 0 / 10%);
	font-family: 'ELAND_Choice_M';
	font-size: 20px;
	z-index: 10;

	@media ${props => props.theme.s} {
		flex-direction: row;
		height: 60px;
		padding: 0 60px;
	}
`;

/* ----------- Logo ----------- */
const Logo = styled.a`
	width: fit-content;
	cursor: pointer;
`;

const Title = styled.h1``;

/* ----------- nav ----------- */
const Nav = styled.nav`
	width: 100%;

	@media ${props => props.theme.s} {
		width: 300px;
	}
`;

const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
`;

const Li = styled.li`
	color: ${props => (props.isPainting ? props.theme.main : 'none')};
	font-size: 17px;
	cursor: pointer;
`;

const GoToLink = styled(Link)``;

const GoToBlog = styled.a``;

export default Navigation;
