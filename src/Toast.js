import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';

function ToastOption() {
    const [toggleChange, setToggleChange] = useState(false);
    const [display, setDisplay] = useState('Open')

    function handleClick () {
        setToggleChange(!toggleChange);
        if (display == 'Open') {
            setDisplay('Close');
        } else {
            setDisplay('Open');
        }
    }

    return (
        <div style={{width: '80%', margin: '0 auto'}}>
            <Button onClick={handleClick} className="mt-3" >
                Click {display} Toast!
            </Button>
            <Toast show={toggleChange} onClose={handleClick} className='mt-3'>
                <Toast.Header>
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        </div>
    );
}

export default ToastOption;