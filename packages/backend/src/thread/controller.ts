import {prisma} from '../shared/prisma';
import {Request, Response} from 'express';
// import {threadErrors} from '../../../common/types/errors';
import {threadExist} from '../yup/thread';
import {ValidationError} from 'yup';


const addThread = async (req: Request, res: Response) => {
    const inputThread = req.body;
    console.log('ADD THREAD ROUTE LOG');

    try {
        if(!req.session?.user) return;
        await threadExist.validate(inputThread);

        await prisma.thread.create({
            data: {
                ...inputThread,
                userId: req.session.user?.id
            }
        });

        res.status(200).json({
            success: true,
            errors: []
        });
    } catch (e) {
        console.log(e instanceof ValidationError, e);
        res.status(200).json({
            success: false,
            errors: e
        });
    }
};

export default addThread;