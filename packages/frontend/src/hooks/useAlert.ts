import {useState} from 'react';

const useAlert = () => {
    const [isAlert, setIsAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [alertColor, setAlertColor] = useState('#a0a8a2');

    return{
        alert: {
            isAlert,
            alertMsg,
            alertColor
        },
        hideAlert() {
            setIsAlert(false);
        },
        showAlert(msg: string, color: string) {
            setIsAlert(true);
            setAlertMsg(msg);
            setAlertColor(color);
        }
    };
};

export default useAlert;