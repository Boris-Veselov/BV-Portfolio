import PortfolioList from '../portfoliolist/PortfolioList';
import { useEffect, useState } from "react";
import './portfolio.scss';

export default function Portfolio() {
  // const [selected, setSelected] = useState("featured");

// {/* <ul>
//         <li>web</li>
//         <li>print</li>
//         </ul>
//       .container */}

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web',
    },
    {
      id: 'project 3',
      title: 'project 3',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title}
            // active={selected === item.id}
            // setSelected={setSelected}
            // id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        <div className='item'>
          <img src='' alt=''/>
          <h3>Web Dev</h3>
        </div>
        <div className='item'>
          <img src='' alt=''/>
          <h3>Web Dev</h3>
        </div>
        
      </div>
    </div>
  )
}
