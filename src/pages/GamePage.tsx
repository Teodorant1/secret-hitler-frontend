import React from 'react';
import { useState } from 'react';
import { RiGovernmentFill } from "react-icons/ri"
import { FaStar, FaUserSecret } from "react-icons/fa"
import "./pages.css"
import MClong from "../SoundFX/MClong.wav"
import MCshort from "../SoundFX/MCshort.wav"

function GamePage() {
  // these are secret info and they are always different for each player
  const [intel, setintel] = useState<string[]>([])
  const [rolepolicies, setrolepolicies] = useState<string[]>([])

  const [symbols, setsymbols] = useState<string[][][]>([[[".", ".", "."], ["-", "."], [".", "-"], [".", "-", "-", "."], ["."]], [["-", ".", "-"], [".", "."], [".", "-", ".", "."], [".", "-", ".", "."], ["."], ["-", ".", "."]], [["-", ".", "."], [".", ".", "-"], ["-", "-"], ["-", ".", ".", "."], [".", "-", ".", "."], ["."], ["-", ".", "."], ["-", "-", "-"], [".", "-", "."], ["."]]])
  const [playernames, setplayernames] = useState<string[]>(["Jason", "Terrence", "Joe Schmoe", "Gowron", "Worf", "Picard"])
  // const [playernames1 , setplayernames1] = useState<string[]>(playernames)

  const [libdecs, setlibdecs] = useState<number>(0)
  const [fashdecs, setfashdecs] = useState<number>(0)
  const [policies, setpolicies] = useState<number>(0)
  const [discardedpolicies, setdiscardedpolicies] = useState<number>(0)
  const [president, setpresident] = useState<string>("Picard")
  const [chancelor, setchancelor] = useState<string>("Worf")

  //this one is a eunum based on the number of fascist laws and the number of players 
  const [fashpowers, setfashpowers] = useState<string[]>([])

  //this will be known after the vote is done
  const [votes, setvotes] = useState<string[]>([])
  const [waitingfor, setwaitingfor] = useState<string>("Picard")
  const [currentaction, setcurrentaction] = useState<string>("nominate a chancelor")
  const [stage, setstage] = useState<string>("stage")
  const [substage, setsubstage] = useState<string>("substage")
  const [vetoenabled, setvetoenabled] = useState<boolean>(false)

  type ExportJson = {
    Playernames: string[];
    Libdecs: number;
    Fashdecs: number;
    Policies: number;
    Discardedpolicies: number;
    President: string;
    Chancellor: string;
    Fashpowers: string[];
    Intel: string[];
    Votes: string[];
    RolePolicies: string[];
    WaitingFor: string;
    CurrentAction: string;
    Stage: string;
    Substage: string;
    VetoEnabled: boolean;
  }
  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  async function playsound(symbol: string) {

    if (symbol === ".") {
      new Audio(MCshort).play()
    }

    if (symbol === "-") {
      new Audio(MClong).play()
    }
    return null
  }

  async function playMorseText(text: string[][][]) {

    for (let z: number = 0; z < text.length; z++) {
      await playword(text.at(z)!)
      await sleep(2000)
    }

  }

  async function playword(word: string[][]) {

    for (let q: number = 0; q < word.length; q++) {

      await PlayLetter(word.at(q)!)
      await sleep(1000)

    }

  }

  async function PlayLetter(letter: string[]) {

    for (let i: number = 0; i < letter.length; i++) {

      await playsound(letter.at(i)!)
      await sleep(500)
    }

  }

  function Sidebar_on_left() {
    return <div> {playernames === null && <>no players present</>}
      {playernames !== null && playernames.length > 0 &&
        playernames.map((player, index) => {
          return (<div
            key={index} className='folder'>

            <div>{player === president && <>PRESIDENT </>}   {player === chancelor && <>CHANCELLOR </>}</div>

            <div>    {player}
              {player === president && <><RiGovernmentFill /></>}    {player === chancelor && <><FaStar /> </>}  </div>

            <FaUserSecret />
          </div>)
        })} </div>
  }
  function Stats_Box() {
    return <div>
      <div>
        <div> Waiting for:{waitingfor} </div>
        <div> Current Action:{currentaction} </div>
        <div> Stage :{stage} </div>
        <div> Substage:{substage} </div>
        {vetoenabled && <div>VETO ENABLED!</div>}
        <div>Fascist Policies Enacted:{fashdecs}</div>
        <div>Liberal Policies Enacted:{libdecs}</div>
        <div>Discarded Policies:{discardedpolicies}</div>
        <div>Policies Remaining in Deck:{policies}</div>
        {fashpowers.length > 0 && <div>Fascist Powers Available:</div>}
        <div> {fashpowers.length > 0 && fashpowers.map((power: string, index: number) => { return <div key={index}> {index + 1}.  {power}  </div> })} </div>
        {intel !== null && intel.length > 0 &&
          <div>INTEL:</div>}
        <>{intel !== null && intel.length > 0
          && intel.map((information: string, index) => { return (<div key={index}> {information} </div>) })}</>
      </div>
    </div>
  }

  function RolePoliciesBox() {
    <div>
      {rolepolicies.map((policy, index) => { return (<div key={index}> {policy} </div>) })}
    </div>
  }

  function VoteBox() {
    <div>
      {votes.map((vote, index) => { return (<div key={index}> {vote} </div>) })}
    </div>
  }


  return <div>
    <button onClick={() => { playMorseText(symbols) }} > Click Here to make noise </button>
    <Stats_Box />
    <Sidebar_on_left />
  </div>

}
export default GamePage;


