import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(closeSendMessage());
    }

    return (
        <div>
            <div className="sendMail">
                <div className="sendMail-header">
                    <h3>New Message</h3>
                    <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail-close" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="to" type="email" placeholder="To" {...register('to', {required: true})} />
                    {errors.to && <p className="sendMail-errorMessage">To is mandatory!</p>}

                    <input name="subject" type="type" placeholder="Subject" {...register('subject', {required: true})} />
                    {errors.subject && <p className="sendMail-errorMessage">Subject is mandatory!</p>}
                    
                    <input name="message" type="type" placeholder="Message..." className="inputMessage" {...register('message', {required: true})}  />
                    {errors.message && <p className="sendMail-errorMessage">Message is mandatory!</p>}

                    <div className="sendMail-options">
                        <Button 
                            type='submit'
                            className="sendMail-button" 
                            color='primary' 
                            variant='contained'
                        >
                            Send
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SendMail;