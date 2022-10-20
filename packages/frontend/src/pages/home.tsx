import {useLoaderData} from 'react-router-dom';
import {thread} from '../../types/thread';
import Thread from '../components/thread/thread';

const Home = () => {
    const data = useLoaderData() as Array<thread>;

    if(!data) return <h1>Data loading internal error</h1>;

    return (
        <>
            {data?.map(({id, title, views} : thread) => (
                <Thread key={id} id={id} title={title} views={views} />
            ))}
        </>
    );
};

export default Home;
