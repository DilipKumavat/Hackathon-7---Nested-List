import React from 'react';
function town(props){
    return (<div>
        <ul>
            <li id={`town${props.idx}`}>{props.Name}</li>
        </ul>
        </div>)
}
export default town;