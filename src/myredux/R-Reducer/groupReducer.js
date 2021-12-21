

export const groupReducer =(state={product:[], cart:[], selectProd:[]},action)=>{
    if(action.type==="Add-Product"){
        return {...state, product:[...action.data,...state.product]}
    }
    if(action.type==="select-Product"){
        return{...state,selectProd:[action.data]}
    }
    if(action.type==="Remove"){
        const filt=state.cart.filter((item)=>item!==action.data)
        return{...state,cart:[...filt]}
    }
    if(action.type==="Add-Cart"){
        return{...state,cart:[action.data,...state.cart]}
    }
    return state;
}


// export const groupReducer=(state={product:[], cart:[],selectProd:[]}, action)=>{ 
//     if(action.type==="Add-product"){
//         return {...state,product:[...action.data,...state.product]}
//     }
//     if(action.type==="SelectProduct"){
//         return{...state,selectProd:[action.data]}
//     }
//     if(action.data==="Remove-Prod"){
//         const filtRemove=state.cart.filter((item)=>item!==action.data)
//         return {...state,cart:[...filtRemove]}
//     }
//     if(action.type==="Add-Cart"){
//         return{...state,cart:[...state.cart,...action.data]}
//     }
//     return state;
// }