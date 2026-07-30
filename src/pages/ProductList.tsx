import { Link } from 'react-router'
import { useState } from 'react';
import type { Product } from '../types/product';
import products from '../data/products.json'

        // id: string;
        // title: string;
        // price: number;
        // description:string;
        // image:string;
        // category:string;

export const ProductList = () => {
    return (
        <div>
            <h1>Listado de productos</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}