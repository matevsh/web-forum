import {threadInput} from '../../../common/types/thread';
import {threadErrors} from '../../../common/types/errors';
import axios from 'axios';
import {response} from '../../../common/types/auth';
import {threadSchema} from '../../../common/yup/threadSchema';

const API_URL = 'http://localhost:3000/api/thread';

const useThread = () => {

    const postThread = async (url: string, thread: threadInput) => {
        const response = await axios.post<response<threadErrors>>(url, thread, {withCredentials:true});
        console.log(response);
        return response.data;
    };

    return {
        createThread: async (thread: threadInput) => {
            try {
                await threadSchema.validate(thread, {abortEarly:false});
                const xd =  await postThread(`${API_URL}/add`, thread);
                console.log('useThread response:', xd);

                return xd;
                // return{
                //     success: true,
                //     errors: []
                // };
            }catch (e) {
                console.dir(e);
                return {
                    success: false,
                    errors: e
                };
            }
        }
    };
};

export default useThread;