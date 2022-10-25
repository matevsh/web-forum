import {loginFun} from './auth';
import {ReactNode} from 'react';
import {user} from './auth';

export interface userContext {
    user: user
    login: loginFun
}

export interface userContextProps extends userContext{
    children?: ReactNode
}