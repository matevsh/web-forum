import {createContext} from 'react';
import {userContext, userContextProps} from '../../types/user';

export const UserContext = createContext<userContext | null>(null);

const UserProvider = ({children, user, login}: userContextProps) => {
    return(
        <UserContext.Provider value={{user, login}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;