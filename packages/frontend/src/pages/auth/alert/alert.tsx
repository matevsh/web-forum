import './alert.scss';

type alertProps = {
    color: string
    msg: string
    hideAlert(): void
}

const Alert = ({color, msg, hideAlert}: alertProps) => {

    return(
        <div className='auth-alert' style={{backgroundColor: color}}>
            <div className='auth-alert__close' onClick={hideAlert}>X</div>
            <p>{msg}</p>
        </div>
    );
};

export default Alert;