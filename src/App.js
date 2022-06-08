import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './full_pages/landing';
import About from './full_pages/about';
import Faqs from './full_pages/faqs';
import UserLogin from './full_pages/user_login';
import UserSignUp from './full_pages/user_signup';
import FindPhotographer from './components/user_dashboard/find_photographer';

function App() {
  
  return (
    <div>
      <Routes>

        <Route path="/about" element={<About />} />
        <Route path="/" exact element={ <Landing /> } />
        <Route path="/help" element={<Faqs />} />
        <Route path="/photographers" element={<FindPhotographer />} />
        <Route path="/user_log_in" element={<UserLogin />} />
        <Route path="/user_sign_up" element={<UserSignUp />} />
        
      </Routes>
   
        
    </div>
  );
}

export default App;
