import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import QuestionsList from '../components/QuestionsList';
import Search from '../components/Search';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      filters: {
        tags: 'javascript',
        score: 0,
        limit: 15,
        sort: 'activity'
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleTagsChange(tags) {
    this.setState({ filters: { ...this.state.filters, tags } });
  }

  handleLimitChange(limit) {
    this.setState({ filters: { ...this.state.filters, limit } });
  }

  handleScoreChange(score) {
    this.setState({ filters: { ...this.state.filters, score } });
  }

  handleSortChange(sort) {
    this.setState({ filters: { ...this.state.filters, sort } });
  }

  async onSubmit(event) {
    event.preventDefault();
    // console.log(this.props);
    // console.log(this.state);
    const { tags, limit, score, sort } = this.state.filters;
    const result = await this.props.client.query({
      query: FeedQuestions,
      variables: { tags, limit, score, sort }
    });
    this.setState({ questions: result.data.questions });
  }

  render() {
    return (
      <div className="container">
        <Search
          onSubmit={this.onSubmit}
          filters={this.state.filters}
          onTagsChange={this.handleTagsChange}
          onLimitChange={this.handleLimitChange}
          onScoreChange={this.handleScoreChange}
          onSortChange={this.handleSortChange}
        />
        <QuestionsList questions={this.state.questions} />
      </div>
    );
  }
}

const FeedQuestions = gql`
  query FeedQuestions($tags: String, $limit: Int, $score: Int, $sort: String) {
    questions(tags: $tags, limit: $limit, score: $score, sort: $sort) {
      tags
      title
      question_id
      score
      view_count
      answer_count
      creation_date
      link
      owner {
        profile_image
        display_name
        link
        reputation
      }
    }
  }
`;

export default withApollo(SearchPage);
