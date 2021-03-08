import React, {useContext, useState} from 'react';
import {useParams} from "react-router-dom";
import {DataContext} from "./DataProvider";
import Colors from "./Colors";
import Sizes from "./Sizes";
import DetailsThumb from "./DetailsThumb";


export default function Details() {

    const {id} = useParams();   //отсылка к id определенных часов
    const [products, setProducts] = useContext(DataContext)
    const details = products.filter((product, index) => {
        return product._id === id
    })
    console.log(details)

    return (
        <>
            {
                details.map(product => (
                    <div className="details" key={product._id}>
                        <div className="img-container"
                             style={{backgroundImage: `url(${product.images[0]})`}}/>

                        <div className="box-details">
                            <h2 title={product.title}>{product.title}</h2>
                            <h3>{product.price}</h3>

                            <Colors colors={product.colors}/>                      //компонента с цветами часов

                            <Sizes sizes={product.sizes}/>                         //компонента с размерами часов
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <DetailsThumb images={product.images} />
                            <button className="cart">Add to cart</button>
                        </div>

                    </div>
                ))
            }
        </>
    )
}