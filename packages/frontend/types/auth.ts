import {FormEvent} from 'react';

export type user = {
    login: string
    password: string
}

export type authResponse = {
    ok: boolean
    error: boolean
    success: boolean
    msg: string
}

export interface userRegister extends user {
    email: string
}

export interface formProps {
    onSubmit: (e: FormEvent<HTMLFormElement>, user: user) => Promise<authResponse>
    showAlert(msg: string, color: string): void
}
