import { Router } from 'express';
import {getThreads, getThread} from './controller';

const providerRouter = Router();

providerRouter.get('/', getThreads);
providerRouter.get('/:threadId', getThread);

export default providerRouter;
