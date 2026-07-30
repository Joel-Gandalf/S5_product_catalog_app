import { useParams, useNavigate } from 'react-router'
import products from '../data/products.json'
import { ProductCardDetail } from '../components/ProductCardDetail'

export const ProductDetails = () => {
    const { productId } = useParams()
    const navigate = useNavigate()

    const product = products.find(product => product.id === productId)

    if (!product) return <div>Producto no encontrado</div>

    return (
        <div>
            <button onClick={() => navigate('/')}>
                Volver al listado
            </button>
            <ProductCardDetail product={product}/>
        </div>
    )
}