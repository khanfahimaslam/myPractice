import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ProductChild from './ProductChild';
import "./Redux.css"

const ProductParent = () => {
    const dispatch = useDispatch();
    const [products,setProducts]=useState([])
    const getApiData= async ()=>{
        const allProducts=await axios.get("https://fakestoreapi.com/products");
        setProducts(allProducts.data);
        dispatch({type:"Add-Product", data:allProducts.data})        
        console.log("===--->>",allProducts)
     }
    useEffect(()=>{
        getApiData();
    },[]);
    return (
        <div >
            <h2>Hello Parent Component</h2>
            <div className="card-parent">
                {products.map((item)=>{
                    return <ProductChild item={item} />
                })}
            </div>
        </div>
    );
};

export default ProductParent;





// import React from 'react';
// import { useState,useEffect } from 'react';
// import { useDispatch,useSelector } from 'react-redux';
// import axios from 'axios';
// import ProductChild from './ProductChild';
// import "./Redux.css";
// const ProductParent = ({search}) => {
//     const [prod,setProd]=useState([]);
//     const dispatch=useDispatch();
//     const stateProducts=useSelector((state)=>state.groupReducer.product)
//     const getApiProduct= async ()=>{
//         const allProd = await axios.get("https://fakestoreapi.com/products");
//         console.log("All Products==--->", allProd);
//         setProd(allProd.data);
//         dispatch({type:"Add-Product",data:allProd.data});
//     };
//     useEffect(()=>{
//         getApiProduct();
//     },[]);
//     useEffect(()=>{
//       const feelter=stateProducts.filter((item)=>item.title.toLoweCase().include(search.toLoweCase()));
//       setProd(feelter)
//     },[search])
//     return (
//         <div>
//             <h2>Product Parent</h2>
//             {prod.map((item)=>{
//                 return <ProductChild item={item}/>
//             })}
//         </div>
//     );
// };

// export default ProductParent;