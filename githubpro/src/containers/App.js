import React from 'react';
import Header from '../components/Headers/Header';
import styled from 'styled-components';
import Profile from './Profile';


// your information curl 'https://api.github.com/users/username' 


//avatar_url, html_url, repos_url, name, company, location, email, and bio, where the value of the repos_url

const AppWrapper = styled.div`
text-align:center`;


function App() {
  return (
    <AppWrapper>
      <Header />
      <Profile />
   
    </AppWrapper>
  );
}

export default App;
