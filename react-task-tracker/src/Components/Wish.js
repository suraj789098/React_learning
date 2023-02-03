import React, { useState } from 'react';

let Wish=()=>{
    let [state1, setState1]=useState(
        {Message:'Hello' 
        });
    
    let goodMorning=()=>
    {
        setState1((state1)=>({
            Message: 'Good Morning'
        }));
    };
    let goodAfternoon=(value) =>
    {
        setState1((state1)=>({
            Message: value
        }));
    };

    let goodEvening=(value) =>
    {
        setState1((state1)=>({
            Message: value
        }));
    };
    return(
    
        <>
        <div className='card'>
           <h3>{state1.Message}</h3>
            <button className='bt1' onClick={goodMorning}>Good Morning</button>
            <button className='bt2' onClick={()=>goodAfternoon('Good Afternoon')}>Good Afternoon</button>
            <button className='bt3' onClick={()=>goodEvening('Good Evening')}>Good Evening</button>
        </div>

        </>
    );
}
export default Wish
