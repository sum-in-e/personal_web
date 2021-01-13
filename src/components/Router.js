import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import About from '../routes/About';
import Portfolio from '../routes/Portfolio';
import Detail from '../routes/Detail';

const MyRouter = () => (
	<Router>
		<>
			<Switch>
				<Route path="/" exact>
					<About />
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
