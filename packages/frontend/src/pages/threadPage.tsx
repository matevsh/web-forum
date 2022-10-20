import {useParams} from 'react-router-dom';

const Thread = () => {
    const {threadId} = useParams();

    return (
        <>
            <h1>This is single thread page</h1>
            <p>id: {threadId}</p>
        </>
    );
};

export default Thread;
