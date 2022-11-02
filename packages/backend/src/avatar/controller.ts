import {Request, Response} from 'express';
import {resolve} from 'path';

const avatarController = (req: Request, res: Response) => {
    res.sendFile(resolve(`public/${req.params.id}.png`));
};

export default avatarController;