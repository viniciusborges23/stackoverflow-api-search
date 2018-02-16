import express from 'express';
import bodyParser from 'body-parser';

const PORT = 4000;
const app = express();

app.get('/', (req, res) => res.send('Hello!'));

app.listen(PORT, () => console.log(`Server is now listing on port ${PORT}...`));
