import { getProducts } from "../asyncMock";
import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ( {greeting} ) => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts()
            .then(result => {
                setProducts(result)
            })
    },[])
        
    return (
        <>
            <h1>
                {greeting}                
            </h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;