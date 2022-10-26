import {Router} from 'express';
import loginUser from './controllers/login';
import resumeSession from './controllers/session';
import logout from './controllers/logout';

const authRouter = Router();

authRouter.get('/', resumeSession);
authRouter.post('/login', loginUser);
authRouter.get('/logout', logout);

export default authRouter;