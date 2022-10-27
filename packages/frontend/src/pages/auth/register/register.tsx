import Form from './form';
import React, {useContext} from 'react';
import useAlert from '../../../hooks/useAlert';
import Alert from '../alert/alert';
import {UserContext} from '../../../contexts/userProvider';

const Register = () => {
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
                <h1>Rejestracja</h1>
                <p>Stwórz swoje konto</p>
            </header>
            <main>
                <Form onSubmit={context.register} showAlert={showAlert}/>
            </main>
        </div>
    );
};

export default Register;