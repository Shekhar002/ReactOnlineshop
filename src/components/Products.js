import React from 'react';
import {Product} from './Poduct';
export const Products=(props)=>{
    return(
            props.items.map(itemObject=><Product item={itemObject}/>)
        
    );
}
