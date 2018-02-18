import React, { Component } from 'react';
import { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagOptions: [
        { value: 'php', label: 'php' },
        { value: 'reactjs', label: 'reactjs' },
        { value: 'java', label: 'java' },
        { value: 'c++', label: 'c++' },
        { value: 'c#', label: 'c#' },
        { value: 'python', label: 'python' },
        { value: 'jquery', label: 'jquery' },
        { value: 'html', label: 'html' },
        { value: 'ios', label: 'ios' },
        { value: 'android', label: 'android' }
      ]
    };
  }

  handleSortChange(e) {
    const value = e.target.value;
    const scoreElement = document.getElementById('score');
    if (value === 'votes') {
      scoreElement.removeAttribute('disabled');
    } else {
      scoreElement.setAttribute('disabled', true);
      this.props.filters.score = 0;
    }
    this.props.onSortChange(e.target.value);
  }

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
                multi={true}
                clearable={false}
                options={this.state.tagOptions}
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
                  onChange={this.handleSortChange.bind(this)}
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
                  disabled
                  type="number"
                  className="form-control"
                  id="score"
                  onChange={e => this.props.onScoreChange(e.target.value)}
                  value={this.props.filters.score}
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

export default Search;
