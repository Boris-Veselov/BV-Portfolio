import { useState } from 'react';
import './portfolio.scss';
import PortfolioModal from '../portfolioModal/PortfolioModal';

const projects = [
  {
    id: 1,
    title: 'Web Dev Social',
    img: 'assets/wds.png',
    desc: 'A social network for developers to share thoughts and code snippets. Features authentication, posts, and reactions — built with Node.js, Express, and MongoDB.',
    tags: ['Node.js', 'MongoDB', 'Express', 'Handlebars'],
    github: 'https://github.com/Boris-Veselov/web-dev-social',
    live: 'https://guarded-atoll-65920.herokuapp.com/',
  },
  {
    id: 2,
    title: 'Commit to Eat',
    img: 'assets/eat.png',
    desc: 'A team restaurant finder that helps groups decide where to eat. Features collaborative voting and cuisine filtering.',
    tags: ['JavaScript', 'Node.js', 'REST APIs'],
    github: 'https://github.com/Boris-Veselov/commit-to-eat',
  },
  {
    id: 3,
    title: 'Randomizer',
    img: 'assets/random.png',
    desc: 'A versatile randomization tool for picking teams, shuffling lists, or generating random numbers.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Boris-Veselov/Randomizer',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    img: 'assets/weather.png',
    desc: 'Real-time weather app showing current conditions and 5-day forecasts for any city, powered by the OpenWeather API.',
    tags: ['JavaScript', 'OpenWeather API', 'Local Storage'],
    github: 'https://github.com/Boris-Veselov/weather-dashboard',
  },
  {
    id: 5,
    title: 'Run Buddy',
    img: 'assets/runbuddy.png',
    desc: 'A clean, fully responsive website for a fitness running-buddy service. Built with semantic HTML and modern CSS.',
    tags: ['HTML', 'CSS', 'Responsive Design'],
    github: 'https://github.com/Boris-Veselov/run-buddy-website',
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Projects</h1>
      <div className='container'>
        {projects.map(p => (
          <div key={p.id} className='item' onClick={() => setSelectedProject(p)}>
            <img src={p.img} alt={p.title} />
            <div className='overlay'>
              <h3>{p.title}</h3>
              <span>View Details</span>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <PortfolioModal item={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
