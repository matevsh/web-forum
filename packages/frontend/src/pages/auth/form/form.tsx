import {FormEvent, useRef, useState} from 'react';
import {formProps} from '../../../../types/auth';

const Form = ({onSubmit, showAlert}: formProps) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const refBtn = useRef<HTMLInputElement>(null);

    const handleForm = async (e: FormEvent<HTMLFormElement>) => {
        const {current} = refBtn;

        if(current) current.disabled = true;
        const responseLogin = await onSubmit(e, {login, password});

        if(responseLogin.success) {
            showAlert(responseLogin.msg, '#95fa70');
        }
        else {
            if(current) current.disabled = false;
            showAlert('Niepoprawne dane logowania', '#fa7070');
        }
    };

    return (
        <form className='auth-form' onSubmit={handleForm} >
            <label htmlFor="login">Login</label>
            <input
                name='login'
                onChange={({target}) => setLogin(target.value)}
                value={login}
                type="text"
            />
            <label htmlFor="password">Password</label>
            <input
                name='password'
                onChange={({target}) => setPassword(target.value)}
                value={password}
                type="text"
            />
            <input ref={refBtn} type="submit" value="Prześlij"/>
        </form>
    );
};

export default Form;