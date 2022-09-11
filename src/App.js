import './App.css';
import React from 'react';
import Login from './modules/auth/login/Login';

class App extends React.Component {
  render() {
    return (
      <div className="BaseApp">
        <Login/>
      </div>
    );
  }
}


export default App;
