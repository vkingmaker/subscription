import express from 'express';
import logger from 'morgan';
import path from 'path';

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
