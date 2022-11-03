import {prisma} from '../../shared/prisma';
import {Request, Response} from 'express';

export const getThreads = async (req: Request, res: Response) => {
    const threads = await prisma.thread.findMany({
        include: {
            user: {
                select:{
                    id: true,
                    idAvatar: true,
                    login: true
                }
            }
        },
        orderBy: {
            published: 'desc'
        }
    });
    res.status(200).json(threads);
};

export const getThread = async (req: Request, res: Response) => {
    const {threadId} = req.params;

    try{
        const thread = await prisma.thread.findUnique({
            where: {id: +threadId}
        });
        if(!thread) throw new Error('invalid thread Id');

        res.status(200).json(thread);
    } catch (e) {
        res.status(406).json({errCode: 406, msg: `Not Acceptable / ${e}`});
    }

};
