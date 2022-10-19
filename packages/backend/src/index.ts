import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './shared/api.router';

const app = express();

dotenv.config();

app.use('/api', apiRouter);

const {PORT} = process.env;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
