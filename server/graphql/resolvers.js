import axios from 'axios';

const resolvers = {
  Query: {
    async questions(root, args) {
      const { tags, score = '', limit = 15, sort = 'activity' } = args;
      const BASE_URL = 'https://api.stackexchange.com/2.2/questions';
      const resp = await axios.get(
        `${BASE_URL}?site=stackoverflow&tagged=${tags}&sort=${sort}&pagesize=${limit}&min=${score}`
      );
      return resp.data.items;
    }
  }
};

export default resolvers;
