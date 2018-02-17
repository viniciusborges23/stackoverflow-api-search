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

  type Query {
    questions(tags: String, score: Int, limit: Int, sort: String): [Question]
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
