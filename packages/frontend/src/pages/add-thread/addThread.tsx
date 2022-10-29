import './addThread.scss';
import {FormEvent, useState} from 'react';
import useThread from '../../hooks/useThread';
import {threadErrors} from '../../../types/thread';

const AddThread = () => {
    const [errors, setErrors] = useState<threadErrors | null>(null);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const {createThread} = useThread();

    const handleThread = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await createThread({title, desc});
        if(!response.success) setErrors(response.errors);

        console.log(response);
    };

    return (
        <div className="main-content">
            <form action="#" className='thread-add-form' onSubmit={handleThread}>
                <label htmlFor="title" className='thread-label'>Tytuł</label>
                <input
                    value={title}
                    onChange={(e) => {
                        if(errors?.title) {
                            const {title, ...x} = errors;
                            setErrors(x);
                        }
                        setTitle(e.target.value);
                    }}
                    type="text"
                    name='title'
                    className={`thread-input${errors?.title ? ' thread-input-error' : ''}`}
                    required={true}
                />
                {errors?.title ? <p className='thread-error-label'>{errors.title}</p> : null}
                <label htmlFor="desc" className='thread-label'>Opis</label>
                <textarea
                    value={desc}
                    onChange={(e) => {
                        if(errors?.desc) {
                            const {desc, ...x} = errors;
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