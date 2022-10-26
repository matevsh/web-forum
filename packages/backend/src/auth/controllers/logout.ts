import {Request, Response} from 'express';

const logout = (req: Request, res: Response) => {
    try{
        req.session.destroy((err) => {
            if(err) throw new Error(err);
        });
        res.status(200).json({
            error: false,
            msg: 'Wylogowano pomyślnie'
        });
    }catch (e){
        res.status(400).json({
            error: true,
            msg: `Error ${e}`
        });
    }
};

export default logout;