import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
          Doggy Daycare
      </Link>
      <ul>
        <li>
           <Link to="/catalog">Hundarna</Link>
        </li>
        <li>
           <Link to="/info">Om oss</Link>
        </li>
      </ul>
    </nav>
  )
}