import React, { Component } from 'react';

class QuestionsList extends Component {
  // constructor(props) {
  //   super(props);
  // }

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
        <div key={question.question_id} className="list-group-item flex-column align-items-start">
          <div className="row">
            <div className="col col-md-2">
              <p>{question.score} votes</p>
              <p>{question.answer_count} answer</p>
              <small>{question.view_count} views</small>
            </div>
            <div className="col col-md-8">
              <h5>{question.title}</h5>
              {this.renderTags(question.tags)}
            </div>
            <div className="col col-md-2">
              <small>{question.creation_date}</small>
              <img src={question.owner.profile_image} alt={question.owner.display_name} className="img-thumbnail" />
              <p>{question.owner.display_name}</p>
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
