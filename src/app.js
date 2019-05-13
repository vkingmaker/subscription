import express from 'express';
import logger from 'morgan';
import path from 'path';

// eslint-disable-next-line import/named
import { newsletter } from './routes/newsletter';

const app = express();
const PORT = 3000 || process.env.PORT;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', newsletter);

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
