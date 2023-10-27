import { getProducts } from "../asyncMock";
import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemNav = ( ) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() =>{
        getProducts()
            .then(result => {
                setProducts(result)
            })
    },[])
    
    const catalogo = products.filter(product => product.category == categoryId);
        
    return (
        <>
            <h1>
                {categoryId}                
            </h1>
            <ItemList products={catalogo}/>
        </>
    )
}

export default ItemNav;