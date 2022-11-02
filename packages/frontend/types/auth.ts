import {FormEvent} from 'react';
import {authResponse, response} from '../../common/types/auth';

export interface userLogin  {
    login: string
    password: string
}

export interface userRegister  {
    login: string
    email: string
    password: string
    rePassword: string
    checkbox: boolean
}

export type loginHandle = (e: FormEvent<HTMLFormElement>, user: userLogin) => Promise<authResponse>
export type registerHandle = (e: FormEvent<HTMLFormElement>, user: userRegister) => Promise<response>

export interface formProps<T> {
    onSubmit: T
    showAlert(msg: string[], color: string): void
}
