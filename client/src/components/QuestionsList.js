import React, { Component } from 'react';

import Loading from './Loading';
import NoResults from './NoResults';
import ErrorPage from './ErrorPage';
import QuestionsListItem from './QuestionsListItem';

class QuestionsList extends Component {
  renderList() {
    return this.props.questions.map(question => <QuestionsListItem key={question.question_id} question={question} />);
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    if (this.props.didSearch && this.props.error) {
      return <ErrorPage />;
    }

    if (this.props.didSearch && !this.props.questions.length) {
      return <NoResults />;
    }

    return <div className="list-group">{this.renderList()}</div>;
  }
}

export default QuestionsList;
