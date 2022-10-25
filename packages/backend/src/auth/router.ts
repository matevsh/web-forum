import {Router} from 'express';
import loginUser from './login.controller';

const authRouter = Router();

authRouter.post('/login', loginUser);

export default authRouter;