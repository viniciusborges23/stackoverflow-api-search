import React, { Component } from 'react';
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
    if (tags.length > 5) return;
    tags = tags.map(tag => {
      return {
        ...tag,
        value: tag.value.replace(/ /g, '-'),
        label: tag.label.replace(/ /g, '-')
      };
    });
    this.setState({ filters: { ...this.state.filters, tags } });
  }

  handleLimitChange(limit) {
    this.setState({ filters: { ...this.state.filters, limit } });
  }

  handleScoreChange(score) {
    score = score || 0;
    this.setState({ filters: { ...this.state.filters, score } });
  }

  handleSortChange(sort) {
    this.setState({ filters: { ...this.state.filters, sort } });
  }

  async onSubmit(event) {
    event.preventDefault();

    const tags = this.state.filters.tags.map(tag => tag.value).join(';');

    this.setState({ loading: true });
    try {
      const result = await this.props.client.query({
        query: fetchQuestions,
        variables: { ...this.state.filters, tags: encodeURIComponent(tags) }
      });

      this.setState({
        loading: false,
        didSearch: true,
        questions: result.data.questions
      });
    } catch (e) {
      this.setState({
        loading: false,
        didSearch: true,
        error: true
      });
    }
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

export default withApollo(SearchPage);
