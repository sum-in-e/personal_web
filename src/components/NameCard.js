import React, { useRef } from 'react';
import styled from 'styled-components';

const NameCard = () => {
	const textRef = useRef();
	const onClickEmail = () => {
		textRef.current.select();
		document.execCommand('copy');
		alert('Successfully copied email.');
	};
	return (
		<Container>
			<TitleWrapper>
				<Name>Sumin Kim</Name>
				<Occupation>Front-end Developer</Occupation>
				<Line />
			</TitleWrapper>
			<Contact>
				<Links>
					<Link>
						<img src="https://img.icons8.com/ios-glyphs/30/616161/email.png" />
						<P onClick={onClickEmail}>sumpson00@gmail.com</P>
					</Link>
					<EmailInput type="text" ref={textRef} value="sumpson00@gmail.com" readOnly />
					<Link>
						<img src="https://img.icons8.com/ios-glyphs/30/616161/github.png" />
						<A href="https://github.com/sumpson0-0" target="_blank">
							https://github.com/sumpson0-0
						</A>
					</Link>
					<Link>
						<img src="https://img.icons8.com/ios-glyphs/30/616161/blog.png" />
						<A href="https://sumpson0-0.github.io" target="_blank">
							sumpson0-0.github.io
						</A>
					</Link>
				</Links>
			</Contact>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	height: 100%;
	padding: 20px 30px;
	border-radius: 3px;
	background-color: #ffffff;
	box-shadow: rgb(15 15 15 / 30%) 0px 0px 0px 1px, rgb(15 15 15 / 30%) 0px 2px 4px;
`;

/* ----------- Title Wrapper ----------- */
const TitleWrapper = styled.div`
	margin-bottom: 15px;
`;

const Name = styled.h1`
	margin-bottom: 10px;
	color: #000000;
	font-family: 'ELAND_Choice_M';
	font-size: 28px;
`;

const Occupation = styled.p`
	margin-bottom: 5px;
	font-size: 18px;
	color: ${props => props.theme.text};
`;

const Line = styled.div`
	width: 30px;
	border-bottom: 1px solid black;
`;

/* ----------- Contact ----------- */
const Contact = styled.div``;

const Links = styled.ul`
	display: flex;
	flex-direction: column;
`;

const Link = styled.li`
	display: flex;
	align-items: center;
	font-size: 17px;
	&:not(:first-child) {
		margin-top: 5px;
	}
	& > img {
		width: 25px;
		height: 25px;
		margin-right: 5px;
	}
`;

const A = styled.a`
	width: fit-content;
	color: ${props => props.theme.text};
	cursor: pointer;
`;

const P = styled.p`
	color: ${props => props.theme.text};
	cursor: pointer;
`;

const EmailInput = styled.input`
	position: absolute;
	bottom: -50px;
	opacity: 0;
`;

export default NameCard;
