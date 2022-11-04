import { createContext, useEffect } from 'react';
import { userContext } from '../../types/userContext';
import useUser from '../hooks/useUser';
import { ReactNode } from 'react';
import { useLoaderData } from 'react-router-dom';
import { user } from '../../../common/types/user';

export const UserContext = createContext<userContext | null>(null);

type childrenProp = { children: ReactNode };

const UserProvider = ({ children }: childrenProp) => {
    const { user, login, resume, logout, register } = useUser();
    const data = useLoaderData() as user;

    useEffect(() => {
        resume(data);
    }, []);

    return (
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
