import {user} from '../user/user';

export type authResponse = {
    user: user
    success: boolean
    msg: string
}