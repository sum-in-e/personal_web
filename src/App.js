import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Router />
	</ThemeProvider>
);

export default App;
