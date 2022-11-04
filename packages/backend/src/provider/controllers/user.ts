import {prisma} from '../../shared/prisma';
import {Request, Response} from 'express';

export const getUser = async (req: Request, res: Response) => {
    const {userId} = req.params;

    try{
        const user = await prisma.user.findUnique({
            where:{
                id: +userId
            },
            include: {
                Thread: true,
            }
        });

        res.status(200).json({
            success: true,
            user
        });
    }catch (e) {
        res.status(400).json({
            success: false,
            msg: e
        });
    }
};

export default getUser;