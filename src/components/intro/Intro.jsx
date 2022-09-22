import './intro.scss'

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className="imgContainer">
        <a href='https://github.com/Boris-Veselov'>
          <img src='assets/head.png' alt=''
          width="450px" height="700px"/>
          </a>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2> Hi, I'm</h2>
          <h1>Boris Veselov</h1>
          <h3>web developer / graphic designer<span></span></h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt=''/>
        </a>
      </div>
    </div>
  )
}


