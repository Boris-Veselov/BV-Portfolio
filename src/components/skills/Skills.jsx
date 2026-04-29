import './skills.scss';

const skills = [
  'JavaScript', 'React', 'Node.js', 'Git',
  'MySQL', 'REST APIs', 'MongoDB', 'HTML5',
  'CSS3', 'Bootstrap', 'Handlebars', 'Adobe Suite',
];

export default function Skills() {
  return (
    <div className='skills' id='about'>
      <div className='redLine' />
      <div className='content'>
        <div className='imagePanel'>
          <img src='assets/face.png' alt='Boris Veselov' />
        </div>
        <div className='rightPanel'>
          <div className='aboutSection'>
            <h1>About</h1>
            <p>
              I'm a creative web developer and graphic designer with a diverse
              background in language science, teaching, and hospitality. These days,
              I love combining my technical side with my eye for design to help
              people bring their ideas to life.
            </p>
          </div>
          <div className='skillsSection'>
            <h2>Skills</h2>
            <ul className='skillList'>
              {skills.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
            <div className='resumeLink'>
              <a
                href='https://docs.google.com/document/d/1VGxm-JXSPGf9y_a_XfTZLmTv0jzwYpDM/edit?usp=sharing&ouid=105157163091214567774&rtpof=true&sd=true'
                target='_blank'
                rel='noreferrer'
                className='btn-resume'
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='redLine' />
    </div>
  );
}
