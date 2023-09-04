import React from 'react';
import { useState } from 'react';
import {RiGovernmentFill} from "react-icons/ri"
import {FaStar , FaUserSecret} from "react-icons/fa"

function GamePage() {
// these are secret info and they are always different for each player
const [intel , setintel] = useState<string[]>([])
const [rolepolicies , setrolepolicies] = useState<string[]>([])

    
const [symbols , setsymbols] = useState<string[][][]>( [[[".",".","."],["-","."],[".","-"],[".","-","-","."],["."]],[["-",".","-"],[".","."],[".","-",".","."],[".","-",".","."],["."],["-",".","."]],[["-",".","."],[".",".","-"],["-","-"],["-",".",".","."],[".","-",".","."],["."],["-",".","."],["-","-","-"],[".","-","."],["."]]])
const [playernames , setplayernames] = useState<string[]>(["Jason" , "Terrence" , "Joe Schmoe" , "Gowron" , "Worf" , "Picard"])
const [playernames1 , setplayernames1] = useState<string[]>(null!)

const [libdecs , setlibdecs] = useState<number>(0)
const [fashdecs , setfashdecs] = useState<number>(0)
const [policies , setpolicies] = useState<number>(0)
const [discardedpolicies , setdiscardedpolicies] = useState<number>(0)
const [president , setpresident] = useState<string>("Picard")
const [chancelor , setchancelor] = useState<string>("Worf")

//this one is a eunum based on the number of fascist laws and the number of players 
const [fashpowers , setfashpowers] = useState<string[]>([])

//this will be known after the vote is done
const [votes , setvotes] = useState<string[]>([])
const [waitingfor , setwaitingfor] = useState<string>("Picard")
const [currentaction , setcurrentaction] = useState<string>("nominate a chancelor")
const [stage , setstage] = useState<string>("stage")
const [substage , setsubstage] = useState<string>("substage")
const [vetoenabled , setvetoenabled] = useState<boolean>(false)

interface ExportJson {
Playernames: string[];     
Libdecs: number;          
Fashdecs: number;        
Policies: number;        
Discardedpolicies: number;
President: string;       
Chancellor: string;      
Fashpowers: string[];      
Intel: string [];            
Votes: string [];           
RolePolicies: string[];    
WaitingFor: string;      
CurrentAction: string;   
Stage: string;           
Substage: string;        
VetoEnabled: boolean;     
}

function Sidebar_on_left () {
    return <div > 
        
        {playernames === null && <>no players present</>}
        { playernames !== null && playernames.length > 0 &&  playernames.map(player =>{ return (<div className='folder'>

<div>{ player === president && <>PRESIDENT </> }   { player === chancelor && <>CHANCELLOR </> }</div>

<div>    {player}  
   { player === president && <><RiGovernmentFill/></> }    { player === chancelor && <><FaStar/> </> }  </div>

   <FaUserSecret/>
    </div>)})} </div>
}



return <div> 
<Sidebar_on_left/>
<div>Placeholder for File</div></div>

}
export default GamePage;


