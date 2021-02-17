import React, { useRef } from 'react';
import styled from 'styled-components';

const Header = () => {
	const textRef = useRef();
	const d = new Date();
	const year = d.getFullYear();

	const onClickEmail = () => {
		textRef.current.select();
		document.execCommand('copy');
		alert('Successfully copied email.');
	};
	return (
		<Container>
			<a href="/">
				<Title>Sumin Kim</Title>
			</a>
			<Contact>
				<Links>
					<Link>
						<img src="https://img.icons8.com/ios-glyphs/30/52565e/email.png" />
						<P onClick={onClickEmail}>sumpson00@gmail.com</P>
					</Link>
					<EmailInput type="text" ref={textRef} value="sumpson00@gmail.com" readOnly />
					<Link>
						<img src="https://img.icons8.com/ios-glyphs/30/52565e/github.png" />
						<A href="https://github.com/sumpson0-0" target="_blank">
							https://github.com/sumpson0-0
						</A>
					</Link>
					<Link>
						<img src="https://img.icons8.com/ios-glyphs/30/52565e/blog.png" />
						<A href="https://sumpson0-0.github.io" target="_blank">
							sumpson0-0.github.io
						</A>
					</Link>
				</Links>
			</Contact>
			<Copyright>{year}&#174;</Copyright>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	width: 30%;
	padding: 30px;
	background-color: white;
`;

/* ----------- Title ----------- */
const Title = styled.h1`
	cursor: pointer;
`;

/* ----------- Contact ----------- */
const Contact = styled.div`
	height: 100%;
	padding-top: 35px;
`;

const Links = styled.ul`
	display: flex;
	flex-direction: column;
`;

const Link = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 6px;
	font-size: 17px;

	& > img {
		width: 25px;
		height: 25px;
		margin-right: 5px;
	}
`;

const A = styled.a`
	cursor: pointer;
`;

const P = styled.p`
	cursor: pointer;
`;

const EmailInput = styled.input`
	position: absolute;
	bottom: -50px;
	opacity: 0;
`;

/* ----------- Copyright ----------- */
const Copyright = styled.p`
	text-align: end;
	font-size: 20px;
	color: #6a737b;
`;

export default Header;
