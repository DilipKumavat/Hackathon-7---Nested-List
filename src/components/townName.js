import React from 'react';
function town(props){
    return (<div>
        <ul>
            <li id={`town${props.idx+1}`} key={props.Name+props.idx}>{props.Name}</li>
        </ul>
        </div>)
}
export default town;