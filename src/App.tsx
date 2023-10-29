import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MClong from "./SoundFX/MClong.wav"
import MCshort from "./SoundFX/MCshort.wav"
import GamePage from './pages/GamePage';


function App() {

  return (
    <div className="App">
      <header className="App-header">

      

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        

          Learn React

        </a>
        {/* <Folder/> */}
            
            <GamePage/>
      </header>
    </div>
  );
}

export default App;
