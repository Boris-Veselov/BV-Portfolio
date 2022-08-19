import './portfolio.scss'

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
        <li>Project 4</li>
        <li>Project 5</li>
      </ul>
      <div className='container'>
        <div className='item'>
          <img src='' alt=''/>
          <h3>Web Dev</h3>
        </div>
      </div>
    </div>
  )
}
