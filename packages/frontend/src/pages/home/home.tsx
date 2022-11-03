import {useLoaderData} from 'react-router-dom';
import {thread} from '../../../types/thread';
import Thread from '../../components/thread/thread';
import Searchbar from './searchbar/searchbar';

const Home = () => {
    const data = useLoaderData() as Array<thread>;

    if(typeof data === 'object' && !Array.isArray(data)) return <h1>Data loading internal error</h1>;

    return (
        <main className='main-content'>
            <Searchbar/>
            {data?.map(({id, title, views, published, user} : thread) => (
                <Thread
                    key={id}
                    id={id}
                    title={title}
                    views={views}
                    published={published}
                    user={user}
                />
            ))}
        </main>
    );
};

export default Home;
