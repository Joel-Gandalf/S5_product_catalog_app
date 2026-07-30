import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from '../components/ProductCard'
import type { Product } from '../types/product'

const mockProduct: Product = {
  id: '1',
  title: 'Lápiz',
  price: 2,
  description: 'Super lápiz',
  image: 'src',
  category: 'Papelería'
}

describe('ProductCard', () => {

  it('renderiza correctamente el título, la descripción y la imagen', () => {

    render(<ProductCard product={mockProduct} />)

    expect(screen.getByText('Lápiz')).toBeInTheDocument()
    expect(screen.getByText('Super lápiz')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'src')
  })

})