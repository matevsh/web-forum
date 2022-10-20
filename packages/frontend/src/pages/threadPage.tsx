import {useLoaderData} from 'react-router-dom';
import {thread} from '../../types/thread';

const mainStyles = {
    paddingTop: '2rem',
};

const Thread = () => {
    const data = useLoaderData() as thread;

    return (
        <>
            <main style={mainStyles}>
                <p>20.10.2022 16:03</p>
                <p>views: {data.views}</p>
                <h1>{data.title}</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda at doloremque dolorum fugit ipsam, laudantium maiores, perspiciatis quasi ratione repellat sit tempora veritatis! Aliquid assumenda at aut consequatur consequuntur cum doloremque ducimus error esse eum explicabo harum illo maxime natus numquam omnis possimus quasi reiciendis saepe, voluptatem. Aperiam autem corporis cumque dicta, dolor doloribus earum esse fuga harum iure, modi nulla obcaecati quam quasi tempora temporibus velit voluptates. Adipisci eaque facilis pariatur quas. Asperiores, autem commodi, cupiditate debitis dolore eligendi et facere fuga incidunt inventore ipsum nisi porro quae quo ratione reiciendis rem repudiandae sapiente, sint sit tenetur ut?</p>
            </main>
        </>
    );
};

export default Thread;
