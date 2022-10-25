import axios from 'axios';
import {user, userRegister, authResponse} from '../../types/auth';
import {FormEvent} from 'react';

const AUTH_URL = 'http://localhost:3000/api/auth';

const useUser = () => {
    const postAuth = async (url: string, user: user) => {
        const {status, data} = await axios.post<authResponse>(url, user);
        if(status !== 200) throw new Error(`Bad request ${status}`);
        return data;
    };

    return {
        login: async (e:FormEvent<HTMLFormElement>,user: user) => {
            e.preventDefault();

            return await postAuth(`${AUTH_URL}/login`, user);
        },
        // register: async (user: userRegister) => {
        //
        // }
    };
};

export default useUser;