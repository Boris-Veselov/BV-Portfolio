import './works.scss'

export default function Works() {
  return <div className='works' id='works'>
      <div className='slider'>
        <div className='container'>
          <div className='item'>
            <div className='left'></div>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src='assets/mobile.png' alt=''/>
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing 
                  elit. Non rem totam aliquid praesentium accusantium 
                  cumque nam neque incidunt sed illum tempora sequi. 
                </p>
                <span>Projects</span>
              </div>
              <div className='right'></div>
          </div>
        </div>
      </div>
    </div>;
}
