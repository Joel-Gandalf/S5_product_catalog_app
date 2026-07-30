import type { Product } from '../types/product';

export interface ProductCardDetailProps {
    product: Product
}

export const ProductCardDetail = ({product: {id ,title, price, description, image, category}}: ProductCardDetailProps) => {
    return (
        <li>
            <h2>{title}</h2>
            <p>{id}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{category}</p>
            <img src={image} alt={description} />
        </li>
    );
}