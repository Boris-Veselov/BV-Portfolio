import './skills.scss'

export default function Skills() {

  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div className='skills' id='skills'>
        <h1>Skills</h1>
        <div className='container'>
          <div className='card'>
            <div className='top'>
              <img src='assets/right-arrow.png' className='left' alt='' />
              <img className='user' src='https://pixabay.com/photos/fence-chain-link-bokeh-lights-1869401/' alt=''/>
              <img className='right' src='assets/youtube.png' alt=''/>
            </div>
            <div className="center">
              Lorem, ipsum dolor sit amet consecvoluptates totm vel 
              eligecessitatibus err
            </div>
            <div className="bottom">
              <h3>Bobby</h3>
              <h4>Boss of people</h4>
            </div>
          </div>
        </div>
    </div>
  )
}
