import './portfolio.scss'

export default function PortfolioList() {

  const list = [
    {
      id: 'project 1',
      title: 'project 1',
    },
    {
      id: 'project 2',
      title: 'project 2',
    },
    {
      id: 'project 3',
      title: 'project 3',
    },
    {
      id: 'project 4',
      title: 'project 4',
    },
  ]
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title}/>
        ))}
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
