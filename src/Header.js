import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'; 
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import {logout, selectUser} from './features/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());   
        });
    };

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
                 <Avatar className="profile-logo" src={user?.photoUrl} onClick={logOut} />
            </div>
        </div>
    )
}

export default Header;