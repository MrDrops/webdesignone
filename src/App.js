import './App.css';
import SocialBar from './components/SocialBar/SocialBar';
import NavBar from './components/NavBar/NavBar';
import TitlePanel from './components/TitlePanel/TitlePanel';
import RotatePanel from './components/RotatePanel/RotatePanel';
import About from './components/About/About';
import VideoPanel from './components/Video/VideoPanel';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <SocialBar />
      <NavBar />
      <TitlePanel />
      <RotatePanel />
      <About />
      <VideoPanel />
      <WhatWeDo />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
