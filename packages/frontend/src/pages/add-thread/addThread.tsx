import './addThread.scss';
import {FormEvent, useState} from 'react';
import useThread from '../../hooks/useThread';
import {threadErrors} from '../../../../common/types/errors';
import {useNavigate} from 'react-router-dom';
import {ValidationError} from 'yup';

const isObject = (input: unknown): input is Record<string, unknown> => {
    return typeof input === 'object' && input !== null && !Array.isArray(input);
};

const isValidationError = (x: unknown): x is ValidationError => {
    if(!isObject(x)) return false;
    if(!('message' in x) || !('path' in x) || !('inner' in x)) return false;
    return Array.isArray(x.inner);
};

const formatErrors = (err: ValidationError) => {
    console.log('formatErrors: ',err);

    const errors: Record<string, string> = {};

    if(!err.path && Array.isArray(err.inner)){
        err.inner.forEach((er: ValidationError) => {
            if(!er.path) return;
            errors[er.path] = er.message;
        });
    } else if(err.path){
        errors[err.path] = err.message;
    }
    console.log(errors);
    return errors;
};

const AddThread = () => {
    const [errors, setErrors] = useState<threadErrors | null>(null);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const redirect = useNavigate();

    const {createThread} = useThread();

    const handleThread = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await createThread({title, desc});
        console.log('addThread component after response:', response);

        if(response?.success) redirect('/');
        else {
            if(isValidationError(response.errors)){
                setErrors(formatErrors(response.errors));
            }
        }
    };
    return (
        <div className="main-content">
            <form action="#" className='thread-add-form' onSubmit={handleThread}>
                <label htmlFor="title" className='thread-label'>Tytuł</label>
                <input
                    value={title}
                    onChange={(e) => {
                        if(errors?.title) {
                            const {title: _title, ...x} = errors;
                            setErrors(x);
                        }
                        setTitle(e.target.value);
                    }}
                    type="text"
                    name='title'
                    className={`thread-input${errors?.title ? ' thread-input-error' : ''}`}
                />
                {errors?.title ? <p className='thread-error-label'>{errors.title}</p> : null}
                <label htmlFor="desc" className='thread-label'>Opis</label>
                <textarea
                    value={desc}
                    onChange={(e) => {
                        if(errors?.desc) {
                            const {desc: _desc, ...x} = errors;
                            setErrors(x);
                        }
                        setDesc(e.target.value);
                    }}
                    name='desc'
                    className={`thread-textarea${errors?.desc ? ' thread-input-error' : ''}`}
                />
                {errors?.desc ? <p className='thread-error-label'>{errors.desc}</p> : null}
                <div className='thread-submit-container'>
                    <input type="submit" value="Dodaj" className='thread-submit' required={true}/>
                </div>
            </form>
        </div>
    );
};

export default AddThread;