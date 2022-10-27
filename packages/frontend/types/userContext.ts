import {loginHandle, registerHandle} from './auth';
import {user} from '../../common/user/user';

export interface userContext {
    user: user | null
    login: loginHandle
    register: registerHandle
    logout(): void
}