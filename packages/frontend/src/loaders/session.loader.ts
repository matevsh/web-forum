import axios from 'axios';

const sessionLoader = async () => {
    try{
        const {data} = await axios.get('http://localhost:3000/api/auth', {withCredentials: true});
        return(data);
    }catch{
        return null;
    }
};

export default sessionLoader;