import { Routes, Route } from 'react-router'
import { ProductList } from './pages/ProductList'
import { ProductDetails } from './pages/ProductDetails'
import { NotFound } from './pages/NotFound'

export const App = () => {

  return (
      <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
  )
}
