import React from 'react';

function Student(props)
{
    return(
        <div className='card1'>
            <h1>Welcome student {props.name} </h1>
            <h2>Age is {props.age}</h2>
        </div>
    );
}
export default Student