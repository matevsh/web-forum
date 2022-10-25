import Form from './form/form';
import React from 'react';
import useUser from '../../hooks/useUser';
import useAlert from '../../hooks/useAlert';
import Alert from './alert/alert';

const Login = () => {
    const {login} = useUser();
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
                <Form onSubmit={login} showAlert={showAlert}/>
            </main>
        </div>
    );
};

export default Login;