import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const Resume = () => (
	<Container>
		<Navigation />
	</Container>
);

const Container = styled.main`
	overflow-y: scroll;
	width: 70%;
	height: 100vh;
	padding: 30px;
	background-color: #f3f6f8;
`;

export default Resume;
