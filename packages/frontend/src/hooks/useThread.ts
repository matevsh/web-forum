import {threadInput} from '../../../types/thread';
import {threadErrors} from '../../types/thread';
import axios from 'axios';
import {response} from '../../../types/auth';

const API_URL = 'http://localhost:3000/api/thread';

const useThread = () => {

    const postThread = async (url: string, thread: threadInput) => {
        const {data} = await axios.post<response>(url, thread);
        return data;
    };

    return {
        createThread: async (thread: threadInput) => {
            try {
                const errors: threadErrors = {};

                if(thread.title.length < 10) {
                    errors.title = 'Tytuł musi mieć przynajmniej 10 znaków';
                }
                if(thread.desc.length < 20) {
                    errors.desc = 'Rozpisz się trochę bardziej ;)';
                }

                if(errors?.title || errors?.desc) throw errors;

                return await postThread(`${API_URL}/add`, thread);
            }catch (e) {
                return {
                    success: false,
                    errors: e as threadErrors
                };
            }
        }


    };
};

export default useThread;