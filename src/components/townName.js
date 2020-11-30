import React from 'react';
function town(props){
    return (<div id={`town${props.idx+1}`} key={props.Name+props.idx}>
            {props.Name}
        </div>)
}
export default town;