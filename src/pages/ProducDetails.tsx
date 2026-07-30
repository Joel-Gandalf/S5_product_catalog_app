import { useParams, useNavigate } from 'react-router'

export const ProductDetails = () => {
    const { productId } = useParams()
    const navigate = useNavigate()

    const books = [
        { id: '1', title: 'React Essentials', author: 'Alex Johnson' },
        { id: '2', title: 'TypeScript in Practice', author: 'Maria Garcia' },
        { id: '3', title: 'Advanced Web Routing', author: 'Sam Wilson' }
    ]

    const product = products.find(product => product.id === productId)

    if (!product) return <div>Llibre no trobat</div>

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Autor: {product.author}</p>
            <button onClick={() => navigate('/products')}>
                Volver al listado
            </button>
        </div>
    )
}