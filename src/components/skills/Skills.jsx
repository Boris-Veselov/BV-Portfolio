import './skills.scss';

const skills = [
  { icon: "assets/js.png",         name: "JavaScript" },
  { icon: "assets/html.png",       name: "HTML5",        featured: true },
  { icon: "assets/css.png",        name: "CSS3" },
  { icon: "assets/react.png",      name: "React",        featured: true },
  { icon: "assets/nodejs.png",     name: "Node.js",      featured: true },
  { icon: "assets/git.png",        name: "Git" },
  { icon: "assets/mysql.png",      name: "MySQL" },
  { icon: "assets/api.png",        name: "REST APIs",    featured: true },
  { icon: "assets/bootstrap.png",  name: "Bootstrap" },
  { icon: "assets/handlebars.png", name: "Handlebars" },
  { icon: "assets/adobe.png",      name: "Adobe Suite" },
  { icon: "assets/mongoDB.png",    name: "MongoDB" },
];

export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <h1>Skills</h1>
      <div className='container'>
        {skills.map((s, i) => (
          <div key={i} className={`skillCard${s.featured ? ' featured' : ''}`}>
            <img src={s.icon} alt={s.name} />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
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
  );
}
