import React from 'react';
import { Card } from 'semantic-ui-react';
import item from '../file/Test.js';
import './Time.css';

function Test() {
    return (
        <div className='Test'>
            <Card.Group items={item} />
        </div>
    );
}

export default Test;