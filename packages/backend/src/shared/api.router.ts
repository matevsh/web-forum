import {Router} from 'express';
import providerRouter from '../provider/router';
import authRouter from '../auth/router';
import avatarRouter from '../avatar/router';
import threadRouter from '../thread/router';

const apiRouter = Router();

apiRouter.use('/data', providerRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/avatar', avatarRouter);
apiRouter.use('/thread', threadRouter);


export default apiRouter;
