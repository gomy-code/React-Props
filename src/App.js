import React from 'react';
import logo from './logo.svg';
import './App.css';
import QUi from './Profile/Profile';
const User =[
{ fullname:"electronique",
  bio:"hahhahaha",
  profession:"jfkjf",
  // image:
}]
function App() {
  return (
    <div className="App">
      <QUi x={User}/>
    </div>
  );
}

export default App;
