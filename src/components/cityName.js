import React,{useState} from 'react';
import Town from './townName';
function City(props){
    const [townName, settownName] = useState(props.town);
    const [showSubTown, setshowSubTown] = useState(false);

    const showTown= ()=>{
        setshowSubTown(!showSubTown);
    }

    return (
        <div>
        
        <button id={`city${props.idx+1}`} key={`city${props.idx+1}`} onClick={showTown}>{props.Name}</button>
        <ol>
        {
            !showSubTown ? null : townName.map((townName,idx)=>(
                <li><Town Name={townName.name} key={`town${idx+1}`} idx={idx} id={`town${idx+1}`}/></li>
                
            ))
        }
        </ol>
        </div>   
    )
}
export default City;