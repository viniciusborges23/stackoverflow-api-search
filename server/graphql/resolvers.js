import axios from 'axios';

const tagOptions = [
  { value: 'android', label: 'android' },
  { value: 'c#', label: 'c#' },
  { value: 'c++', label: 'c++' },
  { value: 'html', label: 'html' },
  { value: 'ios', label: 'ios' },
  { value: 'java', label: 'java' },
  { value: 'jquery', label: 'jquery' },
  { value: 'php', label: 'php' },
  { value: 'python', label: 'python' },
  { value: 'reactjs', label: 'reactjs' },
];

const resolvers = {
  Query: {
    async questions(root, args) {
      const {
        tags, score = '', limit = 15, sort = 'activity',
      } = args;
      const BASE_URL = 'https://api.stackexchange.com/2.2/questions';
      const resp = await axios.get(`${BASE_URL}?site=stackoverflow&tagged=${tags}&sort=${sort}&pagesize=${limit}&min=${score}`);
      return resp.data.items;
    },

    fetchTagOptions() {
      return tagOptions;
    },
  },
};

export default resolvers;
