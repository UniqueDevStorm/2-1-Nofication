import React from 'react';
import { Image } from 'semantic-ui-react';
import src from '../file/시간표.png'
import './Time.css';

function Time() {
    return (
        <div className='Time'>
            <h1 style={{ fontSize: '50px' }}>2 - 1 시간표</h1>
            <Image src={src} size='big' className='Img'></Image>
        </div>
    );
}

export default Time;