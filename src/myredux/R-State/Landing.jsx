import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from '../A-Navigation/NavBar';
import ProductCart from '../B-Products/ProductCart';
import ProductDetail from '../B-Products/ProductDetail';
import ProductParent from '../B-Products/ProductParent';


const Landing = () => {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ProductParent/>}/>
                <Route path="/cart" element={<ProductCart/>}/>
                <Route path="/detail" elemtn={<ProductDetail/>}/>   
            </Routes>
            </BrowserRouter>

        </div>
    );
};

export default Landing;


// import React,{useState} from 'react';
// import NavBar from '../A-Navigation/NavBar';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import ProductParent from '../B-Products/ProductParent';
// import ProductCart from '../B-Products/ProductCart';
// import ProductDetail from '../B-Products/ProductDetail';

// const Landing = () => {
//     const [search,setSearch]=useState();
//     return (
//         <div>
//             <BrowserRouter>
//             <NavBar setSearch={setSearch}/>
//             <Routes>
//                 <Route path="/" element={<ProductParent searxh={search}/>}/>
//                 <Route path="/cart" element={<ProductCart/>}/>
//                 <Route path="/Detail" element={<ProductDetail/>} />
//             </Routes>
//             </BrowserRouter>
            
//         </div>
//     );
// };

// export default Landing;