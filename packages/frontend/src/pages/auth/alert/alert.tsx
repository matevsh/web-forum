import './alert.scss';

type alertProps = {
    color: string
    msg: string[]
    hideAlert(): void
}

const Alert = ({color, msg, hideAlert}: alertProps) => {

    return(
        <div className='auth-alert' style={{backgroundColor: color}}>
            <div className='auth-alert__close' onClick={hideAlert}>X</div>
            <div>
                {msg.map(x => (
                    <p key={x.slice(0,10)}>{x}</p>
                ))}
            </div>
        </div>
    );
};

export default Alert;