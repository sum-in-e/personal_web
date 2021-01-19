import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => (
	<Container>
		<Ul>
			<Li>
				<GoToLink to="/">MAIN</GoToLink>
			</Li>
			<Li>
				<GoToLink to="/portfolio">PORTFOLIO</GoToLink>
			</Li>
		</Ul>
	</Container>
);

const Container = styled.nav`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;

const Ul = styled.ul`
	display: flex;
`;

const Li = styled.li`
	margin-left: 30px;
	cursor: pointer;
`;

const GoToLink = styled(Link)``;

export default Navigation;
