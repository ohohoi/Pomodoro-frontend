import React from 'react';
import './BtnStart.css';
import src from '../../img/start.svg';

const StartBtn = () => {
    const handleClick = (e) => {
        console.log('click');
    }

    return (
        <div id="start-btn" className="btn" onClick={ handleClick }>
            <img src={ src } className="start" alt="start button"/>
        </div>
    );
};

export default StartBtn;