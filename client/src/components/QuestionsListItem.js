import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import dateformat from 'dateformat';
import decode from 'unescape';

const renderTags = tags =>
  tags.map(tag => (
    <span key={tag} className="badge badge-info">
      {tag}
    </span>
  ));

const QuestionsListItem = ({ question }) => (
  <div className="container list-group-item flex-column align-items-start">
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
        <p>{renderTags(question.tags)}</p>
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

const questionPropType = PropTypes.shape({
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  question_id: PropTypes.number,
  score: PropTypes.number,
  view_count: PropTypes.number,
  answer_count: PropTypes.number,
  creation_date: PropTypes.number,
  link: PropTypes.string,
  owner: PropTypes.shape({
    profile_image: PropTypes.string,
    display_name: PropTypes.string,
    link: PropTypes.string,
  }),
});

QuestionsListItem.propTypes = {
  question: questionPropType.isRequired,
};

export default QuestionsListItem;
