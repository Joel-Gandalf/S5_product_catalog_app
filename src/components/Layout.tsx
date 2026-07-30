import { Outlet, NavLink } from 'react-router'
import './index.css'

export const Layout = () => {
  const navStyle = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? 'font-bold' : 'font-normal'
  })
  
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" style={navStyle}>Inicio</NavLink>
          <NavLink to="/products" style={navStyle}>productos</NavLink>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer>
        <p>© 2026 Catálogo de productos</p>
      </footer>
    </div>
  )
}