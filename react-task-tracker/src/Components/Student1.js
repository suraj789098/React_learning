import React, { useState } from 'react';
/* Hooks is a special function of a components */

function Student1()
{
    let [state, setState]=useState({name: 'John', Course: 'Btech'})
   
    return(
        <>
        <div className='card2'>
            <span>Name : {state.name}</span><br/>
            <span>Course: {state.Course}</span>
        </div>
        </>
    );
}
export default Student1