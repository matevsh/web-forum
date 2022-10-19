import { Router } from 'express';
import data from './mock.data';

const providerRouter = Router();

providerRouter.get('/', (req, res) => {
    res.status(200).json(data);
});

export default providerRouter;
