import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './shared/api.router';
import cors from 'cors';
import error404 from './shared/error/404';
import cookieParser from 'cookie-parser';
import sessions from 'express-session';

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials:true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const cookieMonth = 1000* 60* 60* 24* 30;
const {SECRET} = process.env;
const cookieOptions = {
    secret: `${SECRET}`,
    saveUninitialized: true,
    cookie: { maxAge: cookieMonth, sameSite: false},
    resave: false,
};
app.use(sessions(cookieOptions));

app.use('/api', apiRouter);
app.get('*', error404);

const {PORT} = process.env;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
