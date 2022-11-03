import axios, {AxiosResponse} from 'axios';
import {threads} from '../../types/thread';

const URL = 'http://localhost:3000/api/data';

const threadsLoader = async () => {
    try{
        const response: AxiosResponse<threads> = await axios.get(URL);
        return response.data;
    } catch (e) {
        console.log('home.loader.ts',e);
        return e;
    }
};

export default threadsLoader;
