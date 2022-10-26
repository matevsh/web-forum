import { Router } from 'express';
import { getThreads, getThread } from './controllers/thread';
import getUser from './controllers/user';

const providerRouter = Router();

providerRouter.get('/', getThreads);
providerRouter.get('/thread/:threadId', getThread);
providerRouter.get('/profile/:userId', getUser);

export default providerRouter;
