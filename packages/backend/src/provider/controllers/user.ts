import users from '../../auth/mock.data';
import {Request, Response} from 'express';

const getUser = async (req: Request, res: Response) => {
    const {userId} = req.params;

    try{
        const [user] = users.filter(x => x.id === +userId);
        // if(!user) throw new Error('invalid profile Id');
        res.status(200).json({
            error: false,
            user: {
                id: user.id,
                login: user.login
            }
        });
    }catch (e) {
        res.status(400).json({
            error: true,
            msg: e
        });
    }
};

export default getUser;