// import React,{useRef} from 'react';
// const UseRefProg = () => {
//     const inputRef=useRef(null);
//     const handFocus=()=>{
//         inputRef.current.focus();
//     }
//     return (
//         <div>
//             <h2>Hello useRef Hook</h2>
//             <input ref={inputRef} type="text" />
//             <button onClick={handFocus}> Focus</button>
//         </div>
//     );
// };
// export default UseRefProg;

import React,{useRef} from 'react';
const UseRefProg=()=>{
    const inRef=useRef(null);
    const handleFocus=()=>{
        inRef.current.focus();
    }
    return(
        <div>
            <h3>Hello useRef Hooks we are implementing</h3>
            <input ref={inRef} type="text" />
            <button onClick={handleFocus}>Foucs on InputBox</button>
        </div>
    )
}
export default UseRefProg;