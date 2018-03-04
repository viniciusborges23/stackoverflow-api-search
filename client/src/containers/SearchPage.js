import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApolloClient from 'apollo-client';
import { withApollo } from 'react-apollo';

import Search from '../components/Search';
import QuestionsList from '../components/QuestionsList';
import fetchQuestions from '../queries/fetchQuestions';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      loading: false,
      didSearch: false,
      error: false,
      filters: {
        tags: [{ value: 'javascript', label: 'javascript', clearableValue: false }],
        score: { value: 0, disabled: true },
        limit: 15,
        sort: 'activity',
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  async onSubmit(event) {
    event.preventDefault();

    const tags = this.state.filters.tags.map(tag => tag.value).join(';');
    const score = this.state.filters.score.value;

    this.setState({ loading: true });
    try {
      const result = await this.props.client.query({
        query: fetchQuestions,
        variables: { ...this.state.filters, score, tags: encodeURIComponent(tags) },
      });

      this.setState({
        loading: false,
        didSearch: true,
        questions: result.data.questions,
      });
    } catch (e) {
      this.setState({
        loading: false,
        didSearch: true,
        error: true,
      });
    }
  }

  handleTagsChange(tags) {
    if (tags.length > 5) return;
    const formattedTags = tags.map(tag => ({
      ...tag,
      value: tag.value.replace(/ /g, '-'),
      label: tag.label.replace(/ /g, '-'),
    }));
    this.setState({ filters: { ...this.state.filters, tags: formattedTags } });
  }

  handleLimitChange(limit) {
    const validLimit = Number(limit) || 0;
    this.setState({ filters: { ...this.state.filters, limit: validLimit } });
  }

  handleScoreChange(score) {
    const validScore = Number(score) || 0;
    this.setState({ filters: { ...this.state.filters, score: { ...this.state.filters.score, value: validScore } } });
  }

  handleSortChange(sort) {
    this.setState({
      filters: { ...this.state.filters, sort, score: { value: 0, disabled: sort !== 'votes' } },
    });
  }

  render() {
    return (
      <div>
        <Search
          onSubmit={this.onSubmit}
          filters={this.state.filters}
          onTagsChange={this.handleTagsChange}
          onLimitChange={this.handleLimitChange}
          onScoreChange={this.handleScoreChange}
          onSortChange={this.handleSortChange}
        />
        <QuestionsList
          error={this.state.error}
          didSearch={this.state.didSearch}
          loading={this.state.loading}
          questions={this.state.questions}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  client: PropTypes.instanceOf(ApolloClient).isRequired,
};

export default withApollo(SearchPage);
