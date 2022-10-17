import './portfolio.scss';

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Projects</h1>
      <div className='container'>
        <div className='item'>
          <img src='assets/wds.png' alt=''/>
          <h3><a href='https://github.com/Boris-Veselov/web-dev-social'>web dev social gh</a><br></br><a href='https://guarded-atoll-65920.herokuapp.com/'>web dev social live</a></h3>
        </div>
        <div className='item'>
          <img src='assets/eat.png' alt=''/>
          <h3><a href='https://github.com/Boris-Veselov/commit-to-eat'>commit to eat</a></h3>
        </div>
        <div className='item'>
          <img src='assets/random.png' alt=''/>
          <h3><a href='https://github.com/Boris-Veselov/Randomizer'>randomizer</a></h3>
        </div>
        <div className='item'>
          <img src='assets/weather.png' alt=''/>
          <h3><a href='https://github.com/Boris-Veselov/weather-dashboard'>weather dashboard</a></h3>
        </div>
        <div className='item'>
          <img src='assets/runbuddy.png' alt=''/>
          <h3><a href='https://github.com/Boris-Veselov/run-buddy-website'>run buddy</a></h3>
        </div>
      </div>
    </div>
  )
}
