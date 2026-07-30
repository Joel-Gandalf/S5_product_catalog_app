import { ProductsCardsList } from '../components/ProductsCardsList';

export const ProductList = () => {
    return (
        <>
            <header>
                <h1>Listado de productos</h1>
            </header>
            <main>
                <ProductsCardsList />
            </main>
        </>
    );
}