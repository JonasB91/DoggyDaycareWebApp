import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
          Doggy Daycare
      </Link>
      <ul>
        <li>
        <Link to="/Catalog">Katalog</Link>
        </li>
        <li>
          <Link to="/info">Information</Link>
        </li>
      </ul>
    </nav>
  )
}