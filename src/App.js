import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Mail from './Mail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
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

          {/* <Route path='/mail'>
            <Mail />
          </Route> */}
        </Switch>
      </div>

    </div>
  </Router>
  );
}

export default App;