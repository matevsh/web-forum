import data from '../mock.data';
import {Request, Response} from 'express';

export const getThreads = (req: Request, res: Response) => {
    res.status(200).json(data);
};

export const getThread = (req: Request, res: Response) => {
    const {threadId} = req.params;

    try{
        const [wanted] = data.filter(t => t.id === +threadId);
        if(!wanted) throw new Error('invalid thread Id');

        res.status(200).json(wanted);
    } catch (e) {
        res.status(406).json({errCode: 406, msg: `Not Acceptable / ${e}`});
    }

};
