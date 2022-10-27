import Form from './form';
import React, {useContext} from 'react';
import useAlert from '../../../hooks/useAlert';
import Alert from '../alert/alert';
import {UserContext} from '../../../contexts/userProvider';

const Login = () => {
    const context = useContext(UserContext);
    if(!context) return <p>invalid context</p>;
    const {alert, showAlert, hideAlert} = useAlert();

    return (
        <div className='auth-container'>
            {alert.isAlert && <Alert
                msg={alert.alertMsg}
                color={alert.alertColor}
                hideAlert={hideAlert}
            />}
            <header>
                <h1>Logowanie</h1>
                <p>Witamy ponownie</p>
            </header>
            <main>
                <Form onSubmit={context.login} showAlert={showAlert}/>
            </main>
        </div>
    );
};

export default Login;