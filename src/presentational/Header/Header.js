import React from 'react';
import './Header.css'
import logoSrc from '../../resources/img/pomodoro-1.png'

const Header = () => {
    return (
        <div id="header">
            <img className="header-logo" src={ logoSrc } alt="pomodoro logo"/>
        </div>
    );
};

export default Header;