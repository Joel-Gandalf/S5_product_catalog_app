import { useState } from 'react';
import type { Product } from '../types/product';

export interface ProductCardProps {
    product: Product
}

        // "id": "1",
        // "title": "Lápiz",
        // "price": 2,
        // "description":"Super lápiz",
        // "image":"src",
        // "category":"Papelería"
export const ProductCard = ({product: {title, description, image}}: ProductCardProps ) => {
    return (
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt="" />
        </li>
    );
} 
