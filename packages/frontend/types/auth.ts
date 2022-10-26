import {FormEvent} from 'react';
import {authResponse} from '../../common/auth/auth';

export type userLogin = {
    login: string
    password: string
}

export type loginHandle = (e: FormEvent<HTMLFormElement>, user: userLogin) => Promise<authResponse>

export interface formProps {
    onSubmit: loginHandle
    showAlert(msg: string, color: string): void
}
