import React from 'react';
import styled from 'styled-components';
import Router from './Router';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';

const App = () => (
	<Container>
		<GlobalStyle />
		<Header />
		<Router />
	</Container>
);

const Container = styled.div`
	display: flex;
	width: 100%;
`;

export default App;
