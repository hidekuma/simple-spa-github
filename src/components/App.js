import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './Index.js';
import SamplePage from './SamplePage.js';
import NotFound from './NotFound.js';
{/* replace routePrefix with your repository name. */}
const routePrefix = '/simple-spa-github';

const App = () => (
	<Router basename={`${routePrefix}`}>
		<Switch>
			<Route exact path="/" component={Index} />
			<Route exact path="/sample" component={SamplePage} />
			{/* Adding 'else > not found' conditions may affect other repository. */}
		</Switch>
	</Router>
);

export default App;
