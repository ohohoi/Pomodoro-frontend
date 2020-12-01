import React, { useState } from 'react'
import './Header.css'
import logoSrc from '../../resources/img/pomodoro-1.png'
import menuSrc from '../../resources/img/menu-icon.png'
import { Drawer } from 'antd'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'

const Header = () => {
    const menu = [
        {
            link: "",
            display: "Home"
        },
        {
            link: "about",
            display: "About"
        }
    ]

    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }
    
    const onClose = () => {
        setVisible(false)
    }

    return (
        <div id="header">
            <Link to="/">
                <img id="header-logo" src={ logoSrc } alt="pomodoro logo"/>
            </Link>
            <div id="header-right">
                <img id="header-menu-icon" src={ menuSrc } alt="menu" onClick={ showDrawer }/>
                <Drawer
                    title="Moving to another page will reset the timer."
                    placement="right"
                    closable={ false }
                    onClose={ onClose }
                    visible={ visible }>

                    <div id="drawer-menu">
                        {
                            menu.map((d, i) => { return (
                                <Link to={ `/${ d.link }` } 
                                    style={{ textDecoration: 'none' }} 
                                    key={ i }>

                                    <div id="menu" onClick={ onClose }>
                                        { d.display }
                                    </div>
                                </Link>
                            )})
                        }
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Header;