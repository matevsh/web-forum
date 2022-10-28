import {Request, Response} from 'express';
import users from '../mock.data';

const findUser = (login: string) => {
    const userIndex = users.map(x => x.login).indexOf(login);
    if(userIndex === -1) throw new Error('Invalid login');
    return users[userIndex];
};

const loginUser = (req: Request, res: Response) => {
    const {login, password} = req.body;

    try{
        const user = findUser(login);

        if(user.password !== password) throw new Error();

        const loggedUser = {
            id: user.id,
            login: user.login
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