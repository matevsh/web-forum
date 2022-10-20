import axios, {AxiosResponse} from 'axios';
import {thread} from '../../types/thread';

const URL = 'http://localhost:3000/api/data';

const threadLoader = async ({params}: any) => {
    const response: AxiosResponse<thread> = await axios.get(`${URL}/${params.threadId}`);
    return response.data;
};

export default threadLoader;
