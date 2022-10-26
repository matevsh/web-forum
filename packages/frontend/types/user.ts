import {loginHandle} from './auth';
import {user} from '../../common/user/user';

export interface userContext {
    user: user | null
    login: loginHandle
}