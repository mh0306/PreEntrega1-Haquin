import React from "react";
import './ItemListContainer.css'

const ItemList = ({saludo}) => {
    return(
        <div className="catalogo_container">
            <div className="bienvenida">
                <h1>mh. Solutions </h1>
            
                <p>{saludo}</p>
            </div>
        </div>
    )
}

export default ItemList