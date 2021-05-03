import React from 'react';

const { useState } = React;

const AspectRatioSquare = () =>{

  function handleResize() {
    console.log('Window resized to: ', window.innerWidth, 'x', window.innerHeight);
    let widthSquare = getComputedStyle(document.getElementById('AspectRatioSquare-content')).width

    let heightSquare = getComputedStyle(document.getElementById('AspectRatioSquare-content')).height

    console.log("AspectRatioSquare-content resized to: ", heightSquare, 'x', widthSquare, ' x ', document.getElementById('AspectRatioSquare-content').innerWidth);
  }

  window.addEventListener('resize', handleResize);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div id="AspectRatioSquare-container">
      <div id="AspectRatioSquare-content">
        <div id="AspectRatioSquare-writing">
          {nums.map((item) => {
            // let id = 'AspectRatioSquareItem' + item;
            // console.log('id: ', id);
            return <div className="AspectRatioSquare-Item" id={'AspectRatioSquare-Item' + item}>{item}</div>
          })}
          {/* <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div>
          <div className="AspectRatioSquare-Item"></div> */}
        </div>
      </div>
    </div>
  )
}

export default AspectRatioSquare;