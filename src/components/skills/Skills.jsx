import './skills.scss'

export default function Skills() {

  const data = [
    {
      icon: "./BV-Portfolio/assets/js.png"
    },
    {
      icon: "./BV-Portfolio/assets/html.png",
      featured: true,
    },
    {
      icon: "./BV-Portfolio/assets/css.png"
    },
    {
      icon: "./BV-Portfolio/assets/react.png"
    },
    {
      icon: "./BV-Portfolio/assets/nodejs.png",
      featured: true,
    },
    {
      icon: "./BV-Portfolio/assets/git.png"
    },
    {
      icon: "./BV-Portfolio/assets/mysql.png"
    },
    {
      icon: "./BV-Portfolio/assets/api.png",
      featured: true,
    },
    {
      icon: "./BV-Portfolio/assets/bootstrap.png"
    },
    {
      icon: "./BV-Portfolio/assets/handlebars.png"
    },
    {
      icon: "./BV-Portfolio/assets/adobe.png"
    },
    {
      icon: "./BV-Portfolio/assets/mongoDB.png"
    },
  ];

  return (
    <div className='skills' id='skills'>
        <h1>Skills</h1>
        <div className='container'>
          {data.map((d) => (
            <div className={d.featured ? 'card featured' : 'card'}>
            <div className='top'>
              <img 
                className='user' 
                src={d.img} 
                alt=''
              />
              <img className='right'
                src={d.icon} 
                alt=''
              />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
            ))}
        </div>
        <div className='resume' id='resume'>
        <a href='https://docs.google.com/document/d/1ZSjDF_P2qgoLla44_rwmi203Sxn94XRGYz-HOGs4ke0/edit?usp=sharing'
        class="link-btn">Download My Resume</a>
        </div>
    </div>
    
  )
}
