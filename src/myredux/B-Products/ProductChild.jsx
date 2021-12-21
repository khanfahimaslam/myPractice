import React from 'react';
import "./Redux.css"
import { useDispatch } from 'react-redux';

const ProductChild = ({item}) => {
    const dispatch=useDispatch();
    return (
        <div className="card">
            {/* <h2>Hello Product Child</h2> */}
            <img className="image" src={item.image} alt="" />
            <h3>{item.title.substr(0,20) + "..."}</h3>
            <h4>Price:${item.price}</h4>
            <button onClick={(()=>dispatch({type:"Add-Cart",data:item }))} >Add to Cart</button>
            <button>View Details</button>
        </div>
    );
};

export default ProductChild;




// import React from 'react';

// const ProductChild = (item) => {
//     return (
//         <div>
//             <h2>Product Child</h2>
//             <img width="250ps" height="250px" src={item.image} alt=""/>
//             {/* <h3>{item.title.substr(0,20) + "..."}</h3> */}
//             <h3>{item.title}</h3>
//             <h4>price:${item.price}</h4>
//             <button> Add to Cart</button>
//             <button>View Details</button>
//         </div>
//     );
// };

// export default ProductChild;