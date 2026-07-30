import { Link } from 'react-router'
import products from '../data/products.json'
import { ProductCard } from '../components/ProductCard';


export const ProductsCardsList = () => {

    return (
        <ul>
            {products.map(product => (
                <Link to={`/products/${product.id}`} key={product.id}>
                    <ProductCard product={product}/>
                </Link>
            ))}
        </ul>
    );
}