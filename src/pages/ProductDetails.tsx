import { useParams, useNavigate } from 'react-router'
import products from '../data/products.json'

        // id: string;
        // title: string;
        // price: number;
        // description:string;
        // image:string;
        // category:string;

export const ProductDetails = () => {
    const { productId } = useParams()
    const navigate = useNavigate()

    const product = products.find(product => product.id === productId)

    if (!product) return <div>Llibre no trobat</div>

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Autor: {product.description}</p>
            <button onClick={() => navigate('/products')}>
                Volver al listado
            </button>
        </div>
    )
}