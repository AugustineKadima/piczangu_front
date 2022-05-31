import './App.css';
import Navbar from './components/navbar_top';
import Hero from './components/main_landing_page/main_hero';
import ContentPage from './components/main_landing_page/content_page';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <ContentPage />
    </div>
  );
}

export default App;
