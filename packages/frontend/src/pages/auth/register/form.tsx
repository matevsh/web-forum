import {FormEvent, useState} from 'react';
import {formProps, registerHandle} from '../../../../types/auth';
import AuthInput from '../input/authInput';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './login.scss';

const Form = ({onSubmit, showAlert}: formProps<registerHandle>) => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const redirect = useNavigate();

    const handleForm = async (e: FormEvent<HTMLFormElement>) => {
        const user = {login, email, password, rePassword, checkbox};
        const {success, errors} = await onSubmit(e, user);

        success
            ? redirect('/auth')
            : showAlert(errors, '#fa7070');
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
                name='email'
                UItext='E-mail'
                value={email}
                setValue={setEmail}
            />
            <AuthInput
                name='password'
                UItext='Hasło'
                value={password}
                setValue={setPassword}
            />
            <AuthInput
                name='repassword'
                UItext='Powtórz Hasło'
                value={rePassword}
                setValue={setRePassword}
            />
            <div className='auth-form__check-box-container'>
                <input
                    checked={checkbox}
                    onChange={()=>setCheckbox(!checkbox)}
                    className='auth-form__check-box'
                    type="checkbox"
                />
                <p className='auth-form__check-box-label'>Zaakceptuj <Link to='/regulamin'>regulamin</Link></p>
            </div>
            <input
                className='auth-form__submit'
                type="submit"
                value="Prześlij"
            />
        </form>
    );
};

export default Form;