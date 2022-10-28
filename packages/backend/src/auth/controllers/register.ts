import {prisma} from '../../shared/prisma';
import {Prisma} from '@prisma/client';
import {genSalt, hash} from 'bcrypt';
import {Request, Response} from 'express';
import validate from '../../utills/registerValidate';


const register = async (req: Request, res: Response) => {
    const reqUser: Prisma.UserCreateInput = req.body;

    try{
        await validate(reqUser);

        const salt = await genSalt(10);
        const passwordHash = await hash(req.body.password, salt);

        const user = {
            login: req.body.login,
            email: req.body.email,
            passwordHash
        };

        const xd = await prisma.user.create({data: user});

        console.log(xd);
        
        res.status(200).json({
            success: true,
            errors: []
        });
    }catch (e) {
        const errors: string[] = [];

        if(Array.isArray(e)){
            e.forEach(x => {
                if(x instanceof Error) errors.push(x.message);
            });
        }

        res.status(200).json({
            success: false,
            errors
        });
    }

};

export default register;