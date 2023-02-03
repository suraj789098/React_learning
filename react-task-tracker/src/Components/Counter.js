import { useState } from 'react';


function Counter() {
    let [state, setState]=useState({
        count1: 0
    })

    let incrConuter= () =>
    {
        setState((state) => (
            {
                count1: state.count1+1

            }
        ));
        alert("Incremented");
    }

    let decrConuter = () =>
    {
        setState((state) => (
            {
                count1: state.count1-1

            }
        ));
        alert("decremented"); 
    }
  return (
    <>
    <div className='count'>
        <h1>Conter</h1>
        <h2>{state.count1}</h2>
        <button className='btn1' onClick={incrConuter}>Increment</button>
        <button className='btn2' onClick={decrConuter}>Decrement</button>
    </div>
    
    </>
 
  );
}

export default Counter;
