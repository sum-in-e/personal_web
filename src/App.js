import React from 'react';
import Router from './Router';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';

const App = () => (
	<>
		<GlobalStyle />
		<Header />
		<Router />
	</>
);

export default App;
