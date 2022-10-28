import {Router} from 'express';
import loginUser from './controllers/login';
import resumeSession from './controllers/session';
import logout from './controllers/logout';
import registerUser from './controllers/register';

const authRouter = Router();

authRouter.get('/', resumeSession);
authRouter.post('/login', loginUser);
authRouter.post('/register', registerUser);
authRouter.get('/logout', logout);

export default authRouter;