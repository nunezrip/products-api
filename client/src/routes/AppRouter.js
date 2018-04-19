import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsDashboard from '../components/ProductsDashboard';
import ProductForm from '../components/ProductForm';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={ProductsDashboard} />
				<Route path="/create" component={ProductForm} />
				<Route path="/edit/:id" component={ProductForm} />
				<Route component={PageNotFound} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
