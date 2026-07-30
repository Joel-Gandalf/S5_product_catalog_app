import './App.css'
import { Routes, Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ProductList } from './pages/BookList'
import { ProductDetails } from './pages/BookDetails'
import { NotFound } from './pages/NotFound'

export const App = () => {

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  )
}
