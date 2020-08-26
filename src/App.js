import React from 'react';
import Navbar from './components/layout/Navbar';
import UserForm from './components/form/UserForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <UserForm />
      </div>
    </div>
  );
}

export default App;
