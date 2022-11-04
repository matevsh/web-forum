import axios from 'axios';
import {LoaderFunctionArgs} from 'react-router-dom';

const profileLoader = async ({params}: LoaderFunctionArgs) => {
    const {data} = await axios.get(`http://localhost:3000/api/data/profile/${params.profileId}`);
    return data.success ? data.user : null;
};

export default profileLoader;