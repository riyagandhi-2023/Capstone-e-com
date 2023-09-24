/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const API = 'https://api.pujakaitem.com/api/products'
export default function ProductsDetails() {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`${API}/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct(`${API}?id=${id}`);
    },[id]);

    const Loading = () => {
        return(
            <>
            Loading...
            </>
        )
    }
    const ShowProduct = () => {
        return(
        <>
        <div className="details">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="text-details">
            <h4> {product.category}</h4>
            <h1>{product.name}</h1>
            <p>{product.company}</p>
            <p> {product.description}</p>
            <h3> ${product.price}</h3>
            <div className="colors">{product.colors}</div>
            <button className="detail-cart">Add to Cart</button>
        </div>
        </>
        )
    }
    return(
        <>
        <div className="container-details">
            <div className="content">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>

        </div>
        </>
    )
}