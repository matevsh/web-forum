import {useLoaderData} from 'react-router-dom';
import {thread} from '../../types/thread';
import Thread from './thread/thread';

const Home = () => {
    const data = useLoaderData() as Array<thread>;
    return (
        <>
            <h1>This is Home page</h1>
            <p>Yes is definitely home page</p>
            {data.map(({id, title, views} : thread) => (
                <Thread key={id} title={title} views={views} />
            ))}
        </>
    );
};

export default Home;
