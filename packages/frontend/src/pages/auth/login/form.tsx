import {FormEvent, useState} from 'react';
import {formProps, loginHandle} from '../../../../types/auth';
import AuthInput from '../input/authInput';
import {useNavigate} from 'react-router-dom';

const Form = ({onSubmit, showAlert}: formProps<loginHandle>) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const redirect = useNavigate();

    const handleForm = async (e: FormEvent<HTMLFormElement>) => {
        const {success, msg} = await onSubmit(e, {login, password});

        success
            ? redirect('/')
            : showAlert(msg, '#fa7070');
    };

    return (
        <form className='auth-form' onSubmit={handleForm} >
            <AuthInput
                name='login'
                UItext='Login'
                value={login}
                setValue={setLogin}
            />
            <AuthInput
                name='password'
                UItext='Hasło'
                value={password}
                setValue={setPassword}
            />
            <input type="submit" value="Prześlij"/>
        </form>
    );
};

export default Form;