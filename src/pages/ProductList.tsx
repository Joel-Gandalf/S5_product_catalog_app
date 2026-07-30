import { Link } from 'react-router'

// const books = [
//     { id: '1', title: 'React Essentials' },
//     { id: '2', title: 'TypeScript in Practice' },
//     { id: '3', title: 'Advanced Web Routing' }
// ]

export const ProductList = () => {
    return (
        <div>
            <h1>Listado de productos</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/books/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}