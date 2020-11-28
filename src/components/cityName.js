import React,{useState} from 'react';
import Town from './townName';
function City(props){
    const [townName, settownName] = useState(props.town);
    const [showSubTown, setshowSubTown] = useState(false);

    const showTown= ()=>{
        setshowSubTown(true);
        
    }

    return (
        <div>
        <button id={`city${props.idx}`} onClick={showTown}>{props.Name}</button>
        {
            !showSubTown ? null : townName.map((townName,idx)=>(
                <Town Name={townName.name} key={`town${idx}`} id={`town${idx}`}/>
            ))
        }
        </div>   
    )
}
export default City;