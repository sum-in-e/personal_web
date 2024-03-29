import React from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';

const Footer = () => {
	const d = new Date();
	const year = d.getFullYear();
	const location = useLocation();

	return (
		<Container isMainPage={location.pathname === '/'}>
			<Contact>
				<Links>
					<Link>
						<A href="mailto:suminkim.me@gmail.com">
							<Img src="https://img.icons8.com/ios/100/ffffff/composing-mail.png" alt="Email" />{' '}
						</A>
					</Link>
					<Link>
						<A href="https://github.com/sumpson0-0" target="_blank">
							<Img src="https://img.icons8.com/ios/100/ffffff/github-2.png" alt="Github" />
						</A>
					</Link>
					<Link>
						<A href="https://www.linkedin.com/in/sumin-kim-434279204/" target="_blank">
							<Img src="https://img.icons8.com/ios/100/ffffff/linkedin-2--v1.png" alt="Linked In" />{' '}
						</A>
					</Link>
					<Link>
						<A href="https://sumpson0-0.github.io" target="_blank">
							<Img src="https://img.icons8.com/ios/100/ffffff/blog.png" alt="Blog" />{' '}
						</A>
					</Link>
				</Links>
			</Contact>
			<Copyright>Copyright {year}. Sumin Kim all rights reserved.</Copyright>
		</Container>
	);
};

const Container = styled.footer`
	display: ${props => (props.isMainPage ? 'none' : 'flex')};
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 180px;
	padding: 30px 30px 0 30px;
	background-color: ${props => props.theme.black};
	@media ${props => props.theme.s} {
		height: 160px;
		padding: 15px 60px 0 60px;
	}
	@media ${props => props.theme.xl} {
		padding: 15px 90px 0 90px;
	}
	@media ${props => props.theme.xxl} {
		padding: 15px 150px 0 150px;
	}
	@media ${props => props.theme.xxxl} {
		padding: 15px 300px 0 300px;
	}
`;

/* ----------- Contact ----------- */
const Contact = styled.div`
	width: 280px;
`;

const Links = styled.ul`
	display: flex;
	justify-content: space-between;
`;

const Link = styled.li`
	display: flex;
	align-items: center;
	width: fit-content;
	background-color: #353432;
	cursor: pointer;
	transition: all 0.3s;
	@media ${props => props.theme.xl} {
		&:hover {
			background-color: ${props => props.theme.main};
		}
	}
`;

const A = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	color: #ababab;
`;

const Img = styled.img`
	width: 30px;
`;

/* ----------- Copyright ----------- */
const Copyright = styled.p`
	font-size: 13px;
	text-align: center;
	color: ${props => props.theme.line};
`;

export default Footer;
