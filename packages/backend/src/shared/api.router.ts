import {Router} from 'express';
import providerRouter from '../provider/router';
import authRouter from '../auth/router';

const apiRouter = Router();

apiRouter.use('/data', providerRouter);
apiRouter.use('/auth', authRouter);

export default apiRouter;
