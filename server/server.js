import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import schema from './graphql/schema';

const PORT = 4000;
const app = express();

app.get('/', (req, res) => res.send('Hello!'));

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema
  })
);

app.get(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);

app.listen(PORT, () => console.log(`Server is now listing on port ${PORT}...`));
