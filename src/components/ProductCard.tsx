import type { Product } from '../types/product';

export interface ProductCardProps {
    product: Product
}

export const ProductCard = ({product: {title, description, image}}: ProductCardProps ) => {
    return (
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt={description} />
        </li>
    );
}
