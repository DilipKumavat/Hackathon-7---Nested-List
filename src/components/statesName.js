import React,{useState} from 'react';
import City from './cityName';
function StateName (props){
    const [thisCity, setthisCity] = useState(false);
    const showCity = ()=>{
        setthisCity(true);
        return 
        
    }
    const [showCityName, setshowCityName] = useState(props.city)
    return (
        <div>
            
            <button onClick={showCity}>{props.Name}</button>
            {
                !thisCity ? null : showCityName.map((element,idx)=>(<ul>
                   <li> <City key={`city${idx}`} id={`city${idx}`} idx={idx} Name={element.name} town={element.towns} /></li>
                    </ul>
                ))
            }
            
        </div>
    )
} 
export default StateName;