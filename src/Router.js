import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import Portfolio from './Pages/Portfolio';
import Detail from './Pages/Detail';

const MyRouter = () => (
	<Router>
		<>
			<Switch>
				<Route path="/" exact>
					<Main />
				</Route>
				<Route path="/portfolio/:id">
					<Detail />
				</Route>
				<Route path="/portfolio">
					<Portfolio />
				</Route>
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);

export default MyRouter;
