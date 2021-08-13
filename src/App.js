import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Mail from './Mail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SendMail from './SendMail';
import {selectSendMessageIsOpen} from './features/mailSlice';
import {useDispatch, useSelector} from 'react-redux';
import Login from './Login';
import {selectUser} from './features/userSlice';
import { auth } from './firebase';
import {login} from './features/userSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // once auth is done, it creates a cookie for us in the backend so the users stays logged in.
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }));
      }
    })
  }, []);
  
  return (
    <Router>
      {!user ? (<Login />) : (
        <div className="App">
        <Header />
  
        <div className="app-body">
          <Sidebar />
  
          <Switch>
            <Route path='/mail'>
                <Mail />
            </Route>
            <Route path='/'>
              <EmailList />
            </Route>
          </Switch>
        </div>
        { sendMessageIsOpen && <SendMail /> }
      </div>
      )}
    
  </Router>
  );
}

export default App;