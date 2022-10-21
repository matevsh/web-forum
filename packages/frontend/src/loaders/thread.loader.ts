import axios, {AxiosResponse} from 'axios';
import {thread} from '../../types/thread';
import {LoaderFunctionArgs} from 'react-router-dom';

const URL = 'http://localhost:3000/api/data';

const threadLoader = async ({params}: LoaderFunctionArgs) => {
    const response: AxiosResponse<thread> = await axios.get(`${URL}/${params.threadId}`);
    return response.data;
};

export default threadLoader;
