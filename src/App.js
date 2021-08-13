import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Mail from './Mail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SendMail from './SendMail';
import {selectSendMessageIsOpen} from './features/mailSlice';
import {useSelector} from 'react-redux';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
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

    </div>
    { sendMessageIsOpen && <SendMail /> }
  </Router>
  );
}

export default App;