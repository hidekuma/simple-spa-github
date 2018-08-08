import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './Index';
import SamplePage from './SamplePage.js';
import NotFound from './NotFound.js';
const routePrefix = '/simple-spa-github';

const App = () => (
	<Router basename={`${routePrefix}`}>
		<Switch>
			<Route exact path="/" component={Index} />
			<Route exact path="/sample" component={SamplePage} />
		</Switch>
	</Router>
);

export default App;
