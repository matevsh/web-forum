import {Router} from 'express';
import addThread from './controller';

const threadRouter = Router();

threadRouter.post('/add', addThread);
threadRouter.get('/add', (req, res) => {
    res.send('this is test add get route');
});

export default threadRouter;