import React from 'react';
import './Footer.css'
import githubSrc from '../../resources/img/iconmonstr-github-1.svg'

const Footer = () => {
    return (
        <div id="footer">
            <div className="copyright">Copyright 2020. Gyeonglim Bang</div>
            <div className="copyright">All rights reserved.</div>
            <div id="div-icon-carrier">
                <a href="https://github.com/ohohoi" target="_blank"><img id="github-logo" src={ githubSrc } alt="github link"/></a>
            </div>
        </div>
    );
};

export default Footer;