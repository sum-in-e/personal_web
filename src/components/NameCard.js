import React from 'react';
import styled from 'styled-components';

const NameCard = () => (
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
					<A href="mailto:suminkim.me@gmail.com" title="메일 보내기">
						suminkim.me@gmail.com
					</A>
				</Link>
				<Link>
					<img src="https://img.icons8.com/ios-glyphs/30/616161/github.png" />
					<A href="https://github.com/sumpson0-0" target="_blank" title="깃헙으로 이동">
						https://github.com/sumpson0-0
					</A>
				</Link>
				<Link>
					<img src="https://img.icons8.com/windows/32/616161/domain.png" />{' '}
					<A href="https://sumin-kim.web.app/" target="_blank" title="개인 홈페이지로 이동">
						https://sumin-kim.web.app/
					</A>
				</Link>
				<Link>
					<img src="https://img.icons8.com/ios-glyphs/30/616161/blog.png" />
					<A href="https://sumpson0-0.github.io" target="_blank" title="블로그로 이동">
						https://sumpson0-0.github.io
					</A>
				</Link>
			</Links>
		</Contact>
	</Container>
);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: 20px 30px;
	border-radius: 3px;
	background-color: 	color: ${props => props.theme.white};
	box-shadow: rgb(15 15 15 / 30%) 0px 0px 0px 1px, rgb(15 15 15 / 30%) 0px 2px 4px;
	@media ${props => props.theme.s} {
		justify-content : flex-end;
		padding : 20px;
	}
`;

/* ----------- Title Wrapper ----------- */
const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 30px;
	margin-bottom: 15px;
	@media ${props => props.theme.s} {
		align-items: flex-start;
		margin-top: 0;
	}
`;

const Name = styled.h1`
	margin-bottom: 10px;
	color: ${props => props.theme.black};
	font-family: 'ELAND_Choice_M';
	font-size: 28px;
`;

const Occupation = styled.p`
	margin-bottom: 15px;
	color: ${props => props.theme.text};
`;

const Line = styled.div`
	width: 30px;
	border-bottom: 1px solid ${props => props.theme.black};
`;

/* ----------- Contact ----------- */
const Contact = styled.div``;

const Links = styled.ul``;

const Link = styled.li`
	display: flex;
	align-items: center;
	margin-top: 2px;
	& > img {
		width: 22px;
		height: 22px;
		margin-right: 5px;
	}
`;

const A = styled.a`
	color: ${props => props.theme.text};
	cursor: pointer;
	@media ${props => props.theme.xxl} {
		font-size: 17px;
	}
`;

export default NameCard;
