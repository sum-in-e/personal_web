import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Pages/Main';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Detail from './Pages/Detail';
import Resume from './Pages/Resume';

const MyRouter = () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Main />
				</Route>
				<Route path="/about">
					<About />
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
			<Footer />
		</>
	</Router>
);

export default MyRouter;
