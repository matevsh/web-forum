import { Request, Response } from 'express';

const error404 = (req: Request, res: Response) => {
    res.status(404).json({errCode: 404, msg: 'Not Found'});
};

export default error404;
