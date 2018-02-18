import React, { Component } from 'react';

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
    if (this.props.loading) {
      return <Loading />;
    }
    return this.props.questions.map(question => {
      return (
        <div key={question.question_id} className="list-group-item flex-column align-items-start">
          <div className="row">
            <div className="col col-md-2">
              <p className="text-center">
                {question.score}
                <br />votes
              </p>
              <p className="text-center">
                {question.answer_count}
                <br />answer
              </p>
              <p className="text-center">
                <small>{question.view_count} views</small>
              </p>
            </div>
            <div className="col col-md-8">
              <h5>{question.title}</h5>
              <p>{this.renderTags(question.tags)}</p>
              <small>
                <a href={question.link} target="_blank">
                  View more
                </a>
              </small>
            </div>
            <div className="col col-md-2">
              <small>{question.creation_date}</small>
              <img src={question.owner.profile_image} alt={question.owner.display_name} className="img-thumbnail" />
              <p className="text-center">
                <small>{question.owner.display_name}</small>
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (!this.props.questions) return;
    return <div className="list-group">{this.renderList()}</div>;
  }
}

export default QuestionsList;
