import React, { useState } from 'react';

function App() {
  let counter = 0; // Declare and initialize the counter variable

const addValue = () => {
    console.log("clicked"); // Log the message when the function is called
    counter += 1; // Increment the counter by 1
};



  

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value :5</h2>
      <button
      onClick={addValue}>
        
        add value</button>
      <br />
      <button>remove</button>
    </>
  )
}

export default App
