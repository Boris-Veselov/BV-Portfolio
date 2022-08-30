// import PortfolioList from '../portfolioList/PortfolioList';
// import { useEffect, useState } from "react";
// import './portfolio.scss';
// import { fullstackPortfolio,
//   frontendPortfolio,
//   backendPortfolio,} from '../../data';

// export default function Portfolio() {
//   const [selected, setSelected] = useState('full stack');
//   const [data, setData] = useState([]);

//   const list = [
//     {
//       id: 'full stack',
//       title: 'full stack',
//     },
//     {
//       id: 'front-end',
//       title: 'front-end',
//     },
//     {
//       id: 'back-end',
//       title: 'back-end',
//     },
//   ];

//   useEffect(() =>{

//     switch(selected){
//       case 'full stack':
//         setData(fullstackPortfolio);
//         break;
//         case 'front-end':
//         setData(frontendPortfolio);
//         break;
//         case 'back-end':
//         setData(backendPortfolio);
//         break;
//         default:
//           setData(fullstackPortfolio);
//     }
//   }, [selected]);

//   return (
//     <div className="portfolio" id="portfolio">
//       <h1>Portfolio</h1>
//       <ul>
//         {list.map((item) => (
//           <PortfolioList 
//             title={item.title}
//             active={selected === item.id}
//             setSelected={setSelected}
//             id={item.id}
//           />
//         ))}
//       </ul>
//       <div className='container'>
//         {data.map((d) => (
//           <div className='item'>
//             <img src={d.img} alt=''/>
//             <h3>{d.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from 'react'
import './portfolio.scss';


export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Projects</h1>
      <div className='container'>
        <div className='item'>
          <img src='assets/wds.png' alt=''/>
          <h3><a href='https://github.com/Boris-Veselov/web-dev-social'>web dev social</a></h3>
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
