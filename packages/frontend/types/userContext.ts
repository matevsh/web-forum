import {loginHandle, registerHandle} from './auth';
import {user} from '../../types/user';

export interface userContext {
    user: user | null
    login: loginHandle
    register: registerHandle
    logout(): void
}