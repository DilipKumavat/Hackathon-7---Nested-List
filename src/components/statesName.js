import React,{useState} from 'react';
import City from './cityName';
function StateName (props){
    const [thisCity, setthisCity] = useState(false);
    const showCity = (idx)=>{
        setthisCity(true);
        
        return 
        
    }
    const [shoultoggle, setshoultoggle] = useState(false);
    const Toggle=(idx)=>{
        setshoultoggle(true);
    }
    const [showCityName, setshowCityName] = useState(props.city)
    return (
        <div>
            
            <button onClick={showCity} id={`state${props.idx}`}>{props.Name}</button>
            {
                !thisCity ? null : showCityName.map((element,idx)=>(<ul>
                   <li> <City key={`city${idx}`} id={`city${idx}`} idx={idx} Name={element.name} idx={idx}town={element.towns} onClick={Toggle}/></li>
                    </ul>
                ))
            }
            
        </div>
    )
} 
export default StateName;