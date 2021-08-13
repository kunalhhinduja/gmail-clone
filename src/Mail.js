import React from 'react';
import './Mail.css';
import {IconButton} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useHistory} from 'react-router-dom';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {selectedMailDetails} from './features/mailSlice';
import {useSelector} from 'react-redux';

function Mail() {
    const history = useHistory();

    const mailDetails = useSelector(selectedMailDetails);

    return (
        <div className="mail">
            <div className="mail-tools">
                <div className="mail-toolsLeft">
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <ArchiveIcon />
                    </IconButton>

                    <IconButton>
                        <ReportIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail-toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>

                    <IconButton>
                        <PrintIcon />
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail-body">
                <div className="mail-bodyHeader">
                    <h2>{mailDetails?.subject}</h2>
                    <LabelImportantIcon className="mail-important" />
                    <p>{mailDetails?.title}</p>
                    <p className="mail-time">{mailDetails?.time}</p>
                </div>
                <div className="mail-message">
                    <p>{mailDetails?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail;