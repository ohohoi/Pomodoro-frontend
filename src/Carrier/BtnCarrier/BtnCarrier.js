import React from 'react';
import './BtnCarrier.css';
import BtnStart from '../../Component/BtnStart/BtnStart';
import BtnPause from '../../Component/BtnPause/BtnPause';
import BtnStop from '../../Component/BtnStop/BtnStop';

const BtnCarrier = () => {
    return (
        <div id="btn-carrier">
            <BtnStart/>
            <BtnPause/>
            <BtnStop/>
        </div>
    );
};

export default BtnCarrier;