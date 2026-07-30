import { Outlet, NavLink } from 'react-router'

export const Layout = () => {
  const navStyle = ({ isActive }: { isActive: boolean }) => ({
    isActive ? 'font-bold' : 'font-normal'
  })
  
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className={navStyle}>Inicio</NavLink>
          <NavLink to="/products" className={navStyle}>productos</NavLink>
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