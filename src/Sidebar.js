import React from 'react';
import './Sidebar.css';
import {Button, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import DuoIcon from '@material-ui/icons/Duo';
import {useDispatch} from 'react-redux';
import {openSendMessage} from './features/mailSlice';


function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button 
                onClick={() => dispatch(openSendMessage())} 
                startIcon={<AddIcon fontSize='large'/>} 
                className="sidebar-compose"
            >
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number="54" selected="true" />
            <SidebarOption Icon={StarIcon} title="Starred" number="54" />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number="54" />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number="54" />
            <SidebarOption Icon={SendIcon} title="Sent" number="54" />
            <SidebarOption Icon={DraftsIcon} title="Drafts" number="54" />
            <SidebarOption Icon={ExpandMoreIcon} title="More"/>

            <div className="sidebar-footer">
                <div className="sidebar-footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;