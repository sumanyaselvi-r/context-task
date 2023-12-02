import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import DataContext from './context/DataContext'

function ProductCard() {
    const { Details, AddToCart } = useContext(DataContext)
    return (
        <>




            {Details.map((product) => (
                
                
                <div className="col-lg-4 mt-2">
                    <div className="card" >

                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: "bold" }}>{product.name}</h5>
                            <p className="card-text">Rs.{product.price}</p>

                            <button class="btn btn-light" onClick={() => { AddToCart(product) }}>Add to cart</button>

                        </div>
                    </div>

                </div>

            ))}
            <br></br>





        </>



    )
}

export default ProductCard