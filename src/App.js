// import logo from './logo.svg';
import './App.scss';
import Intro from './components/intro/Intro.components';
import Portfolio from './components/portfolio/Portfolio.component';
import Topbar from './components/topbar/Topbar.component';
import Works from './components/works/Works.components';
import Testimonials from './components/testimonials/Testimonials.component';
import Contact from './components/contact/Contact.component';
import Menu from './components/menu/menu.component';
import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
