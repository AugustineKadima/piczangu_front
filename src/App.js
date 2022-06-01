import './App.css';
import Navbar from './components/navbar_top';
import Hero from './components/main_landing_page/main_hero';
import ContentPage from './components/main_landing_page/content_page';
import CustomerTestimonials from './components/main_landing_page/customer_testimonials';
import Faqs from './components/main_landing_page/faqs_landing';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <ContentPage />
        <CustomerTestimonials />
        <Faqs />
    </div>
  );
}

export default App;
