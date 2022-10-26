import {createContext, useEffect} from 'react';
import {userContext} from '../../types/user';
import useUser from '../hooks/useUser';
import {ReactNode} from 'react';
import {useLoaderData} from 'react-router-dom';
import {user} from '../../../common/user/user';

export const UserContext = createContext<userContext | null>(null);

type childrenProp = { children: ReactNode }

const UserProvider = ({children}: childrenProp) => {
    const {user, login, resume, logout} = useUser();
    const data = useLoaderData() as user;

    useEffect(()=>{
        resume(data);
    },[]);

    return(
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;