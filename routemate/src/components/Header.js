import Logo from "../assets/logo.png"
import {Link , NavLink} from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <Link to="/" className = "logo">
            <img src={Logo} alt="Routemate Logo" />
            <span>Routemate</span>
        </Link>
        <nav className="navigation">
            <NavLink to="/" className= 'link' end>Home</NavLink>
            <NavLink to="/products" className = 'link' end>Products</NavLink>
            <NavLink to="/contact" className= 'link' end>contact</NavLink>
        </nav>
    </header>
  )
}
