import axios, {AxiosResponse} from 'axios';
import {threadLoaderData} from '../../types/threadLoaderData';
import {LoaderFunctionArgs} from 'react-router-dom';

const URL = 'http://localhost:3000/api/data/thread';

const threadLoader = async ({params}: LoaderFunctionArgs) => {
    const response: AxiosResponse<threadLoaderData> = await axios.get(`${URL}/${params.threadId}`);
    return response.data;
};

export default threadLoader;
