import React from 'react';
import { useState } from 'react';
import "./Folder.css"

function GamePage() {

const [symbols , setsymbols] = useState<string[][][]>( [[[".",".","."],["-","."],[".","-"],[".","-","-","."],["."]],[["-",".","-"],[".","."],[".","-",".","."],[".","-",".","."],["."],["-",".","."]],[["-",".","."],[".",".","-"],["-","-"],["-",".",".","."],[".","-",".","."],["."],["-",".","."],["-","-","-"],[".","-","."],["."]]])
const [playernames , setplayernames] = useState<string[]>([])
const [libdecs , setlibdecs] = useState<number>(0)
const [fashdecs , setfashdecs] = useState<number>(0)
const [policies , setpolicies] = useState<number>(0)
const [discardedpolicies , setdiscardedpolicies] = useState<number>(0)
const [president , setpresident] = useState<string>("Joe Biden")
const [chancelor , setchancelor] = useState<string>("Angela Merkel")
const [fashpowers , setfashpowers] = useState<string[]>([])
const [intel , setintel] = useState<string[]>([])
const [votes , setvotes] = useState<string[]>([])
const [rolepolicies , setrolepolicies] = useState<string[]>([])
const [waitingfor , setwaitingfor] = useState<string>("Bernie Sanders")
const [currentaction , setcurrentaction] = useState<string>("currentaction")
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

return <div className="folder"> <div>Placeholder for File</div><div>Placeholder for File</div><div>Placeholder for File</div><div>Placeholder for File</div></div>

}
export default GamePage;


