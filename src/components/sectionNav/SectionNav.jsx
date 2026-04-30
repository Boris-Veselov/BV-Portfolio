import { useState, useEffect } from 'react';
import './sectionNav.scss';

const sections = [
  { id: 'intro',     label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact',   label: 'Contact' },
];

export default function SectionNav() {
  const [active, setActive] = useState('intro');

  useEffect(() => {
    const container = document.querySelector('.sections');
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: container, threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='sectionNav'>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`dot${active === id ? ' active' : ''}`}
          onClick={() => scrollTo(id)}
          title={label}
        />
      ))}
    </nav>
  );
}
