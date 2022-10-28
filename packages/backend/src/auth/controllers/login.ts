import {Request, Response} from 'express';
import {prisma} from '../../shared/prisma';
import {compare} from 'bcrypt';

const loginUser = async (req: Request, res: Response) => {
    const {login, password} = req.body;

    try{
        const user = await prisma.user.findUnique({
            where: {login}
        });

        if(!user) throw new Error();

        const boolCompare = await compare(password, user.passwordHash);
        if(!boolCompare) throw new Error();

        const loggedUser = {
            id: user.id,
            login: user.login,
            email: user.email,
            idAvatar: user.idAvatar,
            created: user.created
        };

        req.session.user = loggedUser;
        res.status(200).json({
            user: loggedUser,
            success: true,
            msg: 'Zostałeś pomyślnie zalogowany'
        });
    } catch (e) {
        res.status(200).json({
            user: null,
            success: false,
            msg: 'Niepoprawne dane logowania'
        });
    }
};

export default loginUser;