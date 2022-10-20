import axios, {AxiosResponse} from 'axios';
import {threads} from '../../types/thread';

const threadsLoader = async () => {
    const response: AxiosResponse<threads> = await axios.get('http://localhost:3000/api/data');
    return response.data;
};

export default threadsLoader;
