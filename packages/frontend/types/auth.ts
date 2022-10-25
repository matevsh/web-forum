import {FormEvent} from 'react';

export type user = {
    id: number
    login: string
}

export type userLogin = {
    login: string
    password: string
}

export type authResponse = {
    user: user
    ok: boolean
    error: boolean
    success: boolean
    msg: string
}

export interface userRegister extends userLogin {
    email: string
}

export type loginFun = (e: FormEvent<HTMLFormElement>, user: userLogin) => Promise<authResponse>

export interface formProps {
    onSubmit: loginFun
    showAlert(msg: string, color: string): void
}
