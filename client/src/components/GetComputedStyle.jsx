import React from 'react';

const { useState } = React;

const GetComputedStyle = () =>{
  setTimeout(() => {
    let width = getComputedStyle(document.getElementById('content')).width

    let height = getComputedStyle(document.getElementById('content')).height

    console.log(" REACT container's height / width: ", height, ' / ', width);
  }, 4000);

  return (
    <div id="GetComputedStyle-container">
    </div>
  )
}

export default GetComputedStyle;