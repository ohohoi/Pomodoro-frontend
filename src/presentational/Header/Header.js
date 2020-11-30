import React, { useState } from 'react'
import './Header.css'
import logoSrc from '../../resources/img/pomodoro-1.png'
import menuSrc from '../../resources/img/menu-icon.png'
import { Button, Drawer } from '@material-ui/core'
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
    let [toggle, setToggle] = useState(false)

    const toggleDrawer = () => setToggle(!toggle)

    return (
        <div id="header">
            <Link to="/">
                <img id="header-logo" src={ logoSrc } alt="pomodoro logo"/>
            </Link>
            <div id="header-right">
                <Button onClick={ toggleDrawer }>
                    <img id="header-menu-icon" src={ menuSrc } alt="menu"/>
                </Button>

                <Drawer open={ toggle } onClose={ toggleDrawer } anchor="right">
                    <div id="drawer-menu">
                        {
                            menu.map((d, i) => { return (
                                <Link to={ `/${ d.link }` } style={{ textDecoration: 'none' }} key={ i }>
                                    <div id="menu" onClick={ toggleDrawer }>
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