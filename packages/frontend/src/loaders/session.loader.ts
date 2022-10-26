import axios from 'axios';

const sessionLoader = async () => {
    const {data} = await axios.get('http://localhost:3000/api/auth', {withCredentials: true});
    return(data);
};

export default sessionLoader;