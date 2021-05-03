import React from 'react';
import axios from 'axios';
import AddEventListener from './AddEventListener.jsx';
import GetComputedStyle from './GetComputedStyle.jsx';
import AspectRatioSquare from './AspectRatioSquare.jsx';

const { useState } = React;

const App = () =>{
  return (
    <>
      {/* <AddEventListener /> */}
      <AspectRatioSquare />
    </>
  )
}

export default App;