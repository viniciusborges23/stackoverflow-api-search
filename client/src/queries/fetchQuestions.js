import gql from 'graphql-tag';

export default gql`
  query fetchQuestions($tags: String, $limit: Int, $score: Int, $sort: String) {
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
      }
    }
  }
`;
