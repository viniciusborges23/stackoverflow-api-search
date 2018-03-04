import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Owner {
    display_name: String
    profile_image: String
    link: String
    reputation: Int
  }

  type Question {
    question_id: Int
    owner: Owner
    tags: [String]
    title: String
    score: Int
    view_count: Int
    answer_count: Int
    creation_date: Int
    link: String
  }

  type TagOption {
    label: String
    value: String
  }

  enum Sort {
    ACTIVITY
    CREATION
    VOTES
  }

  type Query {
    questions(tags: String, score: Int, limit: Int, sort: Sort): [Question]
    fetchTagOptions: [TagOption]
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
