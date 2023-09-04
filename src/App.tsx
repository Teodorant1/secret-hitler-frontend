import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MClong from "./SoundFX/MClong.wav"
import MCshort from "./SoundFX/MCshort.wav"
import Folder from './components/Folder/Folder';
import GamePage from './pages/GamePage';


function App() {

const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));

async function playsound ( symbol :string ) {

if (symbol === ".") {new Audio(MCshort).play()
}

if (symbol === "-") {new Audio(MClong).play()
}
return null
}

async function playMorseText ( text:string[][][] ){

  for ( let z:number = 0 ; z<text.length ; z++ ) {
    await playword(text.at(z)!)
    await sleep(2000)
  }

}

async function playword ( word:string[][] ) {

  for ( let q:number=0 ; q <word.length ; q++ ) {

    await PlayLetter ( word.at(q)! )
    await sleep(1000)

  }

}

async function PlayLetter ( letter: string[] ) {

for ( let i:number = 0 ; i < letter.length ; i++ ) {

  await playsound(letter.at(i)!)
  await sleep(500)
}

}


const [symbols , setsymbols] = useState<string[][][]>( [[[".",".","."],["-","."],[".","-"],[".","-","-","."],["."]],[["-",".","-"],[".","."],[".","-",".","."],[".","-",".","."],["."],["-",".","."]],[["-",".","."],[".",".","-"],["-","-"],["-",".",".","."],[".","-",".","."],["."],["-",".","."],["-","-","-"],[".","-","."],["."]]])
const [minisymbols , setminisymbols] = useState<string[]>([".","-",".","."])

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

        </a><Folder/>
            <button onClick={()=>{playMorseText(symbols)}} > Click Here to make noise </button>
            <GamePage/>
      </header>
    </div>
  );
}

export default App;
