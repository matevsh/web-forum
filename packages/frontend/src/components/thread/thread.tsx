import {threadProps} from '../../../types/thread';

const Thread = ({title, views}: threadProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>views: {views}</p>
        </div>
    );
};

export default Thread;
