import React from 'react';
import './App.css';
import { Login } from './components/login/login';
import { StartScreen } from './components/home/StartScreen';
import { Chat } from './components/videoChat/chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/video-chat">
          <Chat />
        </Route>
        <Route path="/start-screen">
          <StartScreen />
        </Route>
        <Route path="/">
          <StartScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
