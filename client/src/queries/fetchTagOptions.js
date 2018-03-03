import gql from 'graphql-tag';

export default gql`
  query fetchTagOptions {
    fetchTagOptions {
      label
      value
    }
  }
`;
