import './skills.scss';

const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Git',
  'MySQL',
  'REST APIs',
  'MongoDB',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Handlebars',
  'Adobe Suite',
];

const BG_TEXT = Array(12).fill(
  'JAVASCRIPT REACT NODE.JS GIT MYSQL REST MONGODB HTML5 CSS3 BOOTSTRAP HANDLEBARS ADOBE '
).join('');

export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <div className='bgText' aria-hidden='true'>{BG_TEXT}</div>
      <div className='content'>
        <h1>Skills</h1>
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
  );
}
