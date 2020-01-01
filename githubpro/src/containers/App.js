import React from 'react';
import './App.css';
import Header from '../components/Headers/Header';
import Profile from './Profile';


// your information curl 'https://api.github.com/users/username' 


//avatar_url, html_url, repos_url, name, company, location, email, and bio, where the value of the repos_url


function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
   
    </div>
  );
}

export default App;
