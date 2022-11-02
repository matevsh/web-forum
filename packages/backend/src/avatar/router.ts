import {Router} from 'express';
import avatarController from './controller';

const avatarRouter = Router();

avatarRouter.get('/:id', avatarController);

export default avatarRouter;