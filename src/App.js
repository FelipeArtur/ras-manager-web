import './App.css';
import React from 'react';
import Login from './modules/auth/login/Login';
import { BrowserRouter } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="base-app">
          <Login/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
