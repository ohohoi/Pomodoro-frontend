import React from 'react';
import './BtnPause.css';
import src from '../../img/pause.svg';

const PauseBtn = () => {
    return (
        <div id="pause-btn" className="btn">
            <img src={ src } className="pause" alt="pause button"/>
        </div>
    );
};

export default PauseBtn;