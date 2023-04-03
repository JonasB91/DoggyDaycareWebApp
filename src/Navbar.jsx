
export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
          Doggy Daycare
      </a>
      <ul>
        <li>
           <a href="/catalog">Katalog</a>
        </li>
        <li>
           <a href="/info">Information</a>
        </li>
      </ul>
    </nav>
  )
}