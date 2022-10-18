import './styles/main/main.css';

import Socialbar from './components/Socialbar/Socialbar';
import Navbar from './components/Navbar/Navbar';
import TitlePanel from './components/TitlePanel/TitlePanel';
import RotatePanel from './components/RotatePanel/RotatePanel';
import About from './components/About/About';
import VideoPanel from './components/VideoPanel/VideoPanel';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Socialbar />
      <Navbar />
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
