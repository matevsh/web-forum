import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './shared/api.router';
import cors from 'cors';
import error404 from './shared/error/404';

const app = express();

app.use(cors({ origin: '*' }));

dotenv.config();

app.use('/api', apiRouter);
app.get('*', error404);

const {PORT} = process.env;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
