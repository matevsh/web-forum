import {Request, Response} from 'express';
import users from './mock.data';

const findUser = (login: string) => {
    const userIndex = users.map(x => x.login).indexOf(login);
    if(userIndex === -1) throw new Error('Invalid login');
    return users[userIndex];
};

const loginUser = (req: Request, res: Response) => {
    const {login, password} = req.body;

    try{
        const user = findUser(login);

        if(user.password !== password) throw new Error('Invalid password');

        const loggedUser = {
            id: user.id,
            login: user.login
        };

        req.session.user = loggedUser;

        res.status(200).json({
            ok: true,
            error: false,
            success: true,
            msg: 'Zostałeś pomyślnie zalogowany',
            user: loggedUser
        });
    } catch (e) {
        res.json({
            ok: true,
            error: true,
            success: false,
            msg: e
        });
    }
};

export default loginUser;

// export type authResponse = {
//     ok: boolean
//     error: boolean
//     success: boolean
//     msg: string
// }