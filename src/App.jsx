import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import MusicPlayer from './components/musicPlayer/MusicPlayer';
import './app.scss';

function App() {
  return (
    <div className="app">
      <div className="sections">
        <Intro/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </div>
      <MusicPlayer />
    </div>
  );
}

export default App;
