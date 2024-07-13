import React, { useState } from 'react';
//functional component

const App = () => {

    const [count, setCount] = useState(1);

    const incrementCount = ()=>{
        setCount(count+1)
    }

    return ( 
        <>
        <h1 className= "title"
        onClick={incrementCount}
        >
            hello world
        </h1>

        {count} is  
        {
            count%2==1?" odd":" even"
        }
        
        </>
     );
} 
export default App;