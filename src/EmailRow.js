import React from 'react';
import './EmailRow.css';
import {Checkbox, IconButton} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {useHistory} from 'react-router-dom';

function EmailRow({title, subject, description, time}) {
    const history = useHistory();

    return (
        <div className="emailRow" onClick={() => history.push('/mail')}>
            <div className="emailRow-options">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
            </div>

            <h3 className="emailRow-title">
                {title}
            </h3>

            <div className="emailRow-message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow-description">-{description}</span>
                </h4>
            </div>

            <div className="emailRow-time">
                {time}
            </div>
        </div>
    )
}

export default EmailRow;