import axios from 'axios';
import {userLogin, userRegister} from '../../types/auth';
import {authResponse, registerResponse} from '../../../common/auth/auth';
import {FormEvent, useState} from 'react';
import {user} from '../../../common/user/user';

const AUTH_URL = 'http://localhost:3000/api/auth';

const useUser = () => {
    const [user, setUser] = useState<user | null>(null);

    const postAuth = async <T>(url: string, user: userLogin) => {
        const {data} = await axios.post<T>(url, user, {withCredentials: true});
        return data;
    };

    const logout = async (url: string) => {
        await axios.get(url, {withCredentials: true});
    };

    return {
        user: user,
        login: async (e:FormEvent<HTMLFormElement>,user: userLogin) => {
            e.preventDefault();

            const response = await postAuth<authResponse>(`${AUTH_URL}/login`, user);
            setUser(response.user);

            return response;
        },
        register: async (e: FormEvent<HTMLFormElement>,user: userRegister) => {
            e.preventDefault();

            try{
                const errors = [];

                if(!user.login)
                    errors.push(new Error('LOGIN: You need to type login'));
                if(!user.email)
                    errors.push(new Error('EMAIL: You need to type email'));
                if(!user.checkbox)
                    errors.push(new Error('CHECKBOX: You need to accept checkbox'));
                if(!user.password)
                    errors.push(new Error('PASSWORD: You need to type password'));
                else if(user.password !== user.rePassword)
                    errors.push(new Error('PASSWORD: Passwords must match'));

                if(errors.length) throw errors;

                return await postAuth<registerResponse>(`${AUTH_URL}/register`, user) ;
            }catch (e){
                const errors: string[] = [];

                if(Array.isArray(e)){
                    e.forEach(x => {
                        if(x instanceof Error) errors.push(x.message);
                    });
                }
                return {
                    success: false,
                    errors
                };
            }
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