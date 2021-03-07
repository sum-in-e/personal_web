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
						<A href="https://www.linkedin.com/in/sumin-kim-434279204/" target="_blank">
							<Img src="https://img.icons8.com/ios/100/ffffff/linkedin-2--v1.png" alt="Linked In" />{' '}
						</A>
					</Link>
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
	height: 25vh;
	padding: 50px 250px 0 250px;
	background-color: ${props => props.theme.black};
`;

/* ----------- Contact ----------- */
const Contact = styled.div`
	padding: 0 250px;
`;

const Links = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 0 25%;
`;

const Link = styled.li`
	display: flex;
	align-items: center;
	width: fit-content;
	font-size: 17px;
	background-color: #353432;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		background-color: ${props => props.theme.main};
	}
`;

const A = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 15px;
	width: fit-content;
	color: #ababab;
`;

const Img = styled.img`
	width: 30px;
`;

/* ----------- Copyright ----------- */
const Copyright = styled.p`
	text-align: end;
	font-size: 14px;
	text-align: center;
	color: ${props => props.theme.text};
`;

export default Footer;
