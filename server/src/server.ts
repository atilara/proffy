import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// Ouvir requisições http
app.listen(3333);
