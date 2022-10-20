import {Router} from 'express';
import providerRouter from '../provider/router';

const apiRouter = Router();

apiRouter.use('/data', providerRouter);

export default apiRouter;
