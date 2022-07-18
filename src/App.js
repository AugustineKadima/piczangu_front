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
import EventDetailsUser from './components/user_dashboard/user_event_details';
import UserEventsPhotoDetail from './components/user_dashboard/user_events_photo_detail';
import PhotographerMainPage from './components/photographer_dashboard/photographer_main_page';
import PhotographerDashboard from './components/photographer_dashboard/photographer_dashboard';
import PhotographerEvents from './components/photographer_dashboard/photographer_events';
import PhotographerEarnings from './components/photographer_dashboard/photographer_earnings';
import PhotographerWithdraw from './components/photographer_dashboard/photographer_withdraw';
import PhotographerWithdrawSetAmount from './components/photographer_dashboard/photographer_withdraw_set_amount';
import PhotographerNewEvent from './components/photographer_dashboard/photographer_new_event';
import PhotographerEventPhotos from './components/photographer_dashboard/photographer_event_photos';
import PhotographerEventSinglePhoto from './components/photographer_dashboard/photographer_event_single_photo';
import PhotographerProfile from './components/photographer_dashboard/photographer_profile';
import PhotographerProfileEdit from './components/photographer_dashboard/photographer_profile_edit';
import PhotographerPortfolio from './components/photographer_dashboard/photographer_portfolio';
import PhotographerNewPortfolio from './components/photographer_dashboard/photographer_new_portfolio';
import PiczanguAdminLogin from './components/admin_dashboard/admin_login';
import AdminDashBoard from './components/admin_dashboard/admin_dashboard';
import AdminWaterMarks from './components/admin_dashboard/admin_watermarks';
import HomepagePhotos from './components/admin_dashboard/admin_homepage_photos';
import AdminEarnings from './components/admin_dashboard/admin_earnings';
import AdminTransferCosts from './components/admin_dashboard/admin_transfer_costs';
import AdminEvents from './components/admin_dashboard/admin_events';
import AdminAccounts from './components/admin_dashboard/admin_accounts';
import AdminTracking from './components/admin_dashboard/admin_tracking';
import AdminEventDetails from './components/admin_dashboard/admin_event_details';


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
        <Route path="/photographer_login" element={<PhotographerMainPage />} />
        <Route path="/photographer_sign_up" element={<PhotographerSignUp />} />
        <Route path="/photographers/details" element={<FindPhotographerDetails />} />
        <Route path="/photographer/portfolio/view" element={<PhotographerPortfolioView />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/profile/edit" element={<EditUserProfile />} />
        <Route path="/user/events" element={<EventsHome/>} />
        <Route path="/user/events/details" element={<EventDetailsUser />} />
        <Route path="/user/events/details/photo" element={<UserEventsPhotoDetail />} />
        <Route path="/photographer/home" element={<PhotographerMainPage/>} />
        <Route path="/photographer/dashboard" element={<PhotographerDashboard/>} />
        <Route path="/photographer/events" element={<PhotographerEvents />} />
        <Route path="/photographer/earnings" element={ <PhotographerEarnings />} />
        <Route path="/photographer/withdraw" element={ <PhotographerWithdraw />} />
        <Route path="/photographer/withdraw/details" element={ <PhotographerWithdrawSetAmount /> } />
        <Route path="/photographer/events/new" element={<PhotographerNewEvent />} />
        <Route path="/photographer/event/photos" element={ <PhotographerEventPhotos />} />
        <Route path="/photographer/events/photos/photo" element={<PhotographerEventSinglePhoto/>} />
        <Route path="/photographer/profile" element={ <PhotographerProfile />} />
        <Route path="/photographer/profile/edit" element={<PhotographerProfileEdit/>} />
        <Route path="/photographer/portfolio" element={<PhotographerPortfolio/>} />
        <Route path="/photographer/portfolio/new" element={<PhotographerNewPortfolio/>} />
        <Route path="/admin/login" element={<PiczanguAdminLogin/>} />
        <Route path="admin/dashboard" element={<AdminDashBoard />} />
        <Route path="/admin/watermarks" element={<AdminWaterMarks />} />
        <Route path="/admin/homepage_photos" element={<HomepagePhotos />} />
        <Route path="/admin/earnings" element={<AdminEarnings />} />
        <Route path="/admin/transfer_costs" element={<AdminTransferCosts />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/accounts" element={<AdminAccounts />} />
        <Route path="/admin/tracking" element={<AdminTracking />} />
        <Route path="admin/event/photos" element={<AdminEventDetails/>} />

        
      </Routes>
   
        
    </div>
  );
}

export default App;
