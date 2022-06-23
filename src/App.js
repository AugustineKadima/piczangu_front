import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './full_pages/landing';
import About from './full_pages/about';
import Faqs from './full_pages/faqs';
import UserLogin from './full_pages/user_login';
import UserSignUp from './full_pages/user_signup';
import FindPhotographer from './components/user_dashboard/find_photographer';
import PhotographerLogin from './full_pages/photographer_login';
import PhotographerSignUp from './full_pages/photographer_sign_up';
import FindPhotographerDetails from './components/user_dashboard/find_photographer_details';
import PhotographerPortfolioView from './components/user_dashboard/photographer_portfolio_view';
import UserProfile from './components/user_dashboard/user_profile';
import EditUserProfile from './components/user_dashboard/edit_user_profile';
import EventsHome from './components/user_dashboard/user_events';

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
        <Route path="/photographer_login" element={<PhotographerLogin />} />
        <Route path="/photographer_sign_up" element={<PhotographerSignUp />} />
        <Route path="/photographers/details" element={<FindPhotographerDetails />} />
        <Route path="/photographer/portfolio" element={<PhotographerPortfolioView />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/profile/edit" element={<EditUserProfile />} />
        <Route path="/user/events" element={<EventsHome/>} />

        
      </Routes>
   
        
    </div>
  );
}

export default App;
