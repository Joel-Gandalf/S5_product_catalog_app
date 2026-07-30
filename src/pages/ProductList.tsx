import { Link } from 'react-router'
import { useState } from 'react';
import type { Product } from '../types/product';
import products from '../data/products.json'
import { ProductCard } from '../components/ProductCard';


export const ProductList = () => {
 
 console.log(products)
    return (
        <div>
            <h1>Listado de productos</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <ProductCard product={product}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}