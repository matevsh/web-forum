import {Request, Response} from 'express';

const resumeSession = (req: Request, res: Response) => {
    res.status(200).json(req.session.user || null);
};

export default resumeSession;