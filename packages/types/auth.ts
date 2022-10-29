import {user} from './user';

export type authResponse = {
    user: user
    success: boolean
    msg: string[]
}

export type response = {
    success: boolean
    errors: string[]
}