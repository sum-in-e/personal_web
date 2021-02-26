import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Main from './Pages/Main';
import Portfolio from './Pages/Portfolio';
import Detail from './Pages/Detail';
import Resume from './Pages/Resume';

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
				<Route path="/private/resume">
					<Resume />
				</Route>
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);

export default MyRouter;
