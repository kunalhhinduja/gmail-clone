import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'; 
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';

function Header() {
    return(
        <div className="header">
            <div className="header-left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt="gmail" />
            </div>

            <div className="header-middle">
                <IconButton>
                    <SearchIcon className="a" />
                </IconButton>
                <input type="text" placeholder="Search Mail" />
                <IconButton>
                    <ArrowDropDownIcon className="header-inputCaret" />
                </IconButton>
            </div>

            <div className="header-right">
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header;