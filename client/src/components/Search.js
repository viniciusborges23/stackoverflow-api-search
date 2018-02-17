import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="tags">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tags"
              placeholder="javascript"
              onChange={e => this.props.onTagsChange(e.target.value)}
              value={this.props.filters.tags}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="score">Score</label>
              <input
                type="number"
                className="form-control"
                id="score"
                placeholder="10"
                onChange={e => this.props.onScoreChange(e.target.value)}
                value={this.props.filters.score}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="limit">Limit</label>
              <select
                className="form-control"
                id="limit"
                onChange={e => this.props.onLimitChange(e.target.value)}
                value={this.props.filters.limit}
              >
                <option value="5">5</option>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="sort">Sort</label>
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
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
