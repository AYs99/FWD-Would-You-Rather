import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UnansweredQuestion from './Unanswered_question';
import AnsweredQuestion from './Answered_question';

class QuestionPage extends Component {
	render() {
		const { autherUserAnsweres, match } = this.props;
		const id = match.params.id;
		const answered = autherUserAnsweres.hasOwnProperty(id) ? true : false;

		return (
			<Fragment>
				<h2 className="text-center my-3">
					<small>Would You Rather...</small>
				</h2>
				{answered ? <AnsweredQuestion id={id} /> : <UnansweredQuestion id={id} />}
			</Fragment>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	const autherUserAnsweres = users[authedUser].answers;

	return {
		autherUserAnsweres
	};
}

export default connect(mapStateToProps)(QuestionPage);
