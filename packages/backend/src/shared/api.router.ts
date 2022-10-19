import {Router} from 'express';
import providerRouter from '../provider/router';
import error404 from './error/404';

const apiRouter = Router();

apiRouter.use('/data', providerRouter);

apiRouter.get('*', error404);

export default apiRouter;
