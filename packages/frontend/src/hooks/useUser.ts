import axios from 'axios';
import {userLogin, authResponse} from '../../types/auth';
import {FormEvent, useEffect, useState} from 'react';
import {user} from '../../types/auth';

const AUTH_URL = 'http://localhost:3000/api/auth';

const useUser = () => {
    const [user, setUser] = useState<user | null>(null);

    useEffect(()=>{
        console.log(user);
    }, [user]);

    const postAuth = async (url: string, user: userLogin) => {
        const {status, data} = await axios.post<authResponse>(url, user);
        if(status !== 200) throw new Error(`Bad request ${status}`);
        return data;
    };

    return {
        user: user,
        login: async (e:FormEvent<HTMLFormElement>,user: userLogin) => {
            e.preventDefault();

            const response = await postAuth(`${AUTH_URL}/login`, user);
            setUser(response.user);

            return response;
        }
    };
};

export default useUser;