import {Router} from 'express';

const authRouter = Router();

authRouter.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        ok: true,
        error: false,
        success: false,
        msg: 'Zostałeś pomyślnie zalogowany'
    });
});
authRouter.get('/login', (req, res) =>{
    res.json({msg: 'this is GET login router'});
});

export default authRouter;

// export type authResponse = {
//     ok: boolean
//     error: boolean
//     success: boolean
//     msg: string
// }