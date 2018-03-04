import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';
import fetchTagOptions from '../queries/fetchTagOptions';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="container">
          <h3>Search on StackExchenge API</h3>
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group">
              <label htmlFor="tags">
                Tags for Search <small> - Maximun of 5 tags.</small>
              </label>
              <Creatable
                id="tags"
                multi
                clearable={false}
                options={this.props.data.fetchTagOptions}
                onChange={value => this.props.onTagsChange(value)}
                value={this.props.filters.tags}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="limit">Results per page</label>
                <select
                  className="form-control"
                  id="limit"
                  onChange={e => this.props.onLimitChange(e.target.value)}
                  value={this.props.filters.limit}
                >
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="sort">Sort by</label>
                <select
                  className="form-control"
                  id="sort"
                  onChange={e => this.props.onSortChange(e.target.value)}
                  value={this.props.filters.sort}
                >
                  <option value="activity">Last Updated</option>
                  <option value="creation">Last Created</option>
                  <option value="votes">Highest Voted</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="score">Minimum of Votes</label>
                <input
                  disabled={this.props.filters.score.disabled}
                  type="number"
                  className="form-control"
                  id="score"
                  onChange={e => this.props.onScoreChange(e.target.value)}
                  value={this.props.filters.score.value}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary mb-2">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  filters: PropTypes.shape({
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
        clearableValue: PropTypes.bool,
      })
    ),
    score: PropTypes.shape({
      value: PropTypes.number,
      disabled: PropTypes.bool,
    }),
    limit: PropTypes.number,
    sort: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onTagsChange: PropTypes.func.isRequired,
  onLimitChange: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    fetchTagOptions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default graphql(fetchTagOptions)(Search);
