import axios from 'axios';
import {userLogin} from '../../types/auth';
import {authResponse} from '../../../common/auth/auth';
import {FormEvent, useState} from 'react';
import {user} from '../../../common/user/user';

const AUTH_URL = 'http://localhost:3000/api/auth';

const useUser = () => {
    const [user, setUser] = useState<user | null>(null);

    const postAuth = async (url: string, user: userLogin) => {
        const {status, data} = await axios.post<authResponse>(url, user, {withCredentials: true});
        if(status !== 200) throw new Error(`Bad request ${status}`);
        return data;
    };

    const logout = async (url: string) => {
        await axios.get(url, {withCredentials: true});
    };

    return {
        user: user,
        login: async (e:FormEvent<HTMLFormElement>,user: userLogin) => {
            e.preventDefault();

            const response = await postAuth(`${AUTH_URL}/login`, user);
            setUser(response.user);

            return response;
        },
        resume: (user: user) => {
            setUser(user);
        },
        logout: async () => {
            setUser(null);
            await logout(`${AUTH_URL}/logout`);
        }
    };
};

export default useUser;