import React, { Component } from 'react';
import numeral from 'numeral';
import dateformat from 'dateformat';
import decode from 'unescape';
import Loading from './Loading';

class QuestionsList extends Component {
  renderTags(tags) {
    return tags.map(tag => (
      <span key={tag} className="badge badge-info">
        {tag}
      </span>
    ));
  }

  renderList() {
    return this.props.questions.map(question => {
      return (
        <div key={question.question_id} className="container list-group-item flex-column align-items-start">
          <div className="row">
            <div className="col col-md-2">
              <p className="text-center">
                {question.score}
                <br />
                <small>votes</small>
              </p>
              <p className="p-3 bg-success text-white text-center">
                {question.answer_count}
                <br />
                <small>answer</small>
              </p>
            </div>
            <div className="col col-md-7">
              <h5>{decode(question.title)}</h5>
              <p>{this.renderTags(question.tags)}</p>
              <div className="d-flex justify-content-between">
                <small className="text-danger">
                  {question.view_count > 1000
                    ? numeral(question.view_count).format('0.0a')
                    : numeral(question.view_count).format('0a')}{' '}
                  views
                </small>
                <small className="text-right">
                  <a href={question.link} target="_blank">
                    View more
                  </a>
                </small>
              </div>
            </div>
            <div className="col col-md-3 text-center">
              <small>{dateformat(question.creation_date, '"asked" mmm dd, "at" HH:MM')}</small>
              <figure className="figure">
                <a href={question.owner.link} target="_blank">
                  <img
                    src={question.owner.profile_image}
                    alt={question.owner.display_name}
                    className="figure-img border-0 img-thumbnail"
                  />
                  <p className="figure-caption">{decode(question.owner.display_name)}</p>
                </a>
              </figure>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    if (this.props.didSearch && this.props.error) {
      return (
        <div className="no-results text-center">
          <h4>Oops! Something went wrong.</h4>
          <p>Couldn't establish a connection to the server.</p>
        </div>
      );
    }

    if (this.props.didSearch && !this.props.questions.length) {
      return (
        <div className="no-results text-center">
          <h4>You're the first one to have this idea!</h4>
          <p>Sorry, we couldn't find any results matching the selected tags and filters.</p>
        </div>
      );
    }

    return <div className="list-group">{this.renderList()}</div>;
  }
}

export default QuestionsList;
