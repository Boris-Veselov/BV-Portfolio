import './works.scss'

export default function Works() {
  return (
    <div className='works' id='works'>
      <div className='slider'>
        <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src='assets/mobile.png' alt=''/>
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing 
                  elit. Non rem totam aliquid praesentium accusantium 
                </p>
                <span>Projects</span>
              </div>
              <div className='right'>
                <img src="https://cdn.dribbble.com/users/1998175/screenshots/15459384/media/48ac2b43ebe81ba0866afea1383cc939.png?compress=1&resize=1200x900" alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src='assets/arrow.png' className='arrow left' alt=''/>
      <img src='assets/arrow.png' className='arrow right' alt=''/>
    </div>
  );
}
