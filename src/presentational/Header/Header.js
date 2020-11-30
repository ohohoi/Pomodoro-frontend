import React, { useState } from 'react'
import './Header.css'
import logoSrc from '../../resources/img/pomodoro-1.png'
import menuSrc from '../../resources/img/menu-icon.png'
import { Button, Drawer } from '@material-ui/core'

const Header = () => {
    const menu = [
        {
            type: "about",
            display: "About"
        },
        {
            type: "login",
            display: "Login"
        }
    ]
    let [toggle, setToggle] = useState(false)

    const toggleDrawer = () => setToggle(!toggle)

    return (
        <div id="header">
            <img id="header-logo" src={ logoSrc } alt="pomodoro logo"/>
            <div id="header-right">
                <Button onClick={ toggleDrawer }>
                    <img id="header-menu-icon" src={ menuSrc } alt="menu"/>
                </Button>

                <Drawer open={ toggle } onClose={ toggleDrawer } anchor="right">
                    <div id="drawer-menu">
                        {
                            menu.map((d, i) => { return (
                                <div id="menu" key={ i }>
                                    { d.display }
                                </div>
                            )})
                        }
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Header;