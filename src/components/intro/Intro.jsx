import './intro.scss'

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='nameRow'>
        <div className='nameText'>
          <h1>Boris <img src='assets/checkmark.png' className='checkIcon' alt='' /></h1>
          <h1>Veselov</h1>
        </div>
      </div>
      <div className='redLine' />
      <div className='imageSection'>
        <a href='https://github.com/Boris-Veselov' target='_blank' rel='noreferrer'>
          <img src='assets/head.png' alt='' />
        </a>
      </div>
      <div className='redLine' />
      <nav className='navLinks'>
        <a href='#about'>
          <span className='arrow'>↗</span>
          about
        </a>
        <a href='#portfolio'>
          <span className='arrow'>↗</span>
          portfolio
        </a>
        <a href='#contact'>
          <span className='arrow'>↗</span>
          contact
        </a>
      </nav>
    </div>
  )
}
