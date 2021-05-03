import React from 'react';

const { useState } = React;

const AddEventListener = () =>{

  // const [dimensions, setDimensions] = useState([window.innerWidth, window.innerHeight])

  // const handleResize = () => {
  //   setDimensions(window.innerWidth, window.innerHeight);
  //   console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
  // }

  // window.addEventListener('resize', handleResize);

  return (
    <div id="AddEventListener-container">
      <div id="ael-inner-container" onScroll={()=> console.log('scroll from react')}>
        <div id="ael-inner"></div>
      </div>
      {/* {console.log('hi')}
      {console.log('IIII resized to: ', dimensions[0], 'x', dimensions[1])}
      width: {dimensions[0]} // height: {dimensions[1]} */}
    </div>
  )
}

export default AddEventListener;