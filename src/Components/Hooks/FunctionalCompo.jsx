import React,{useState,useEffect,useRef} from 'react';

const FunctionalCompo = () => {
    const [timer,setTime]=useState(0);
    const inRef=  useRef()
    useEffect(()=>{
        inRef.current=setInterval(()=>{
            setTime((preState)=>preState + 1);
        },1000);
        return()=> clearInterval(inRef.current);

    },[]);    
    return (
        <div>
           <h2>Functional Component Set Timer</h2>
           <h3>Functional Timer:{timer}</h3>
           <button onClick={()=>clearInterval(inRef.current)}>Clear Timer</button>
        </div>
    )
};

export default FunctionalCompo;