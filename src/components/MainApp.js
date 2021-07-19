import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavigationBar from './Navigation_bar';
import Home from './Home_page';
import NewQuestion from './New_question';
import QuestionPage from './Question_page';
import LeaderBoard from './LeaderBoard';
import PageNotFound from './Page_not_found';

class PrivateApp extends Component {
	render() {
		return (
			<Router>
				<Container>
					<NavigationBar />
					<main>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/questions/:id" component={QuestionPage} />
							<Route path="/add" component={NewQuestion} />
							<Route path="/leaderboard" component={LeaderBoard} />
							<Route component={PageNotFound} />
						</Switch>
					</main>
				</Container>
			</Router>
		);
	}
}

export default PrivateApp;
