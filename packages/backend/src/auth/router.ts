import {Router} from 'express';
import loginUser from './controllers/login';
import resumeSession from './controllers/session';

const authRouter = Router();

authRouter.get('/', resumeSession);
authRouter.post('/login', loginUser);

export default authRouter;