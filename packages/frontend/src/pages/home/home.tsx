import { useLoaderData } from 'react-router-dom';
import { threadLoaderData } from '../../../types/threadLoaderData';
import Thread from '../../components/thread/thread';
import Searchbar from './searchbar/searchbar';
import scss from './home.module.scss';
import { useTheme } from '../../hooks/useTheme';

const Home = () => {
    const data = useLoaderData() as Array<threadLoaderData>;
    const { darkTheme } = useTheme();

    if (typeof data === 'object' && !Array.isArray(data))
        return <h1>Data loading internal error</h1>;

    return (
        <main className={`${scss.content} ${darkTheme ? scss.dark : ''}`}>
            <Searchbar />
            {data?.map(
                ({ id, title, views, published, user }: threadLoaderData) => (
                    <Thread
                        key={id}
                        id={id}
                        title={title}
                        views={views}
                        published={published}
                        user={user}
                    />
                )
            )}
        </main>
    );
};

export default Home;
