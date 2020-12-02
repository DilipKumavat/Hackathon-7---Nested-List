import React,{useState} from 'react';
import City from './cityName';
function StateName (props){
    const [thisCity, setthisCity] = useState(false);
    const [list, setlist] = useState(false);
    const showCity = (idx)=>{
        setlist(!list);
        setthisCity(!thisCity);
        
    }
    const [showCityName, setshowCityName] = useState(props.city)
    return (
        <div>
            
            <button onClick={showCity} id={`state${props.idx+1}`}>{props.Name}</button>
            {
                !list ? null : <ol>
                {
                    !thisCity && !props.ctoggle ? null : showCityName.map((element,idx)=>(
                       <li><City key={`city${idx+1}`} id={`city${idx+1}`} idx={idx} Name={element.name} idx={idx} town={element.towns} /></li>
                    ))
                }
                </ol>
            }
        </div>
    )
} 
export default StateName;