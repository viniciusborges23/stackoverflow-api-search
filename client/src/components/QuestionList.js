import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class QuestionList extends Component {
  renderList() {
    return this.props.data.questions.map(question => {
      return (
        <li key={question.question_id}>
          {question.title}
          score: {question.score}
        </li>
      );
    });
  }

  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return <div>{this.renderList()}</div>;
  }
}

const query = gql`
  {
    questions(tag: "javascript") {
      question_id
      title
      score
      owner {
        profile_image
      }
    }
  }
`;

export default graphql(query)(QuestionList);
