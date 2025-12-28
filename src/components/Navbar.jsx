import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="kb-navbar navbar navbar-expand-lg">
      <div className="container">
        {/* LOGO */}
        <Link className="kb-logo navbar-brand" to="/">
          KBOOM<span>DEV</span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#kbNavbar"
          aria-controls="kbNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="kbNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center kb-nav-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/servicios">
                Servicios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/galeria">
                Galería
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                Nosotros
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3">
              <a
                href="https://wa.me/543815624585"
                target="_blank"
                rel="noopener noreferrer"
                className="kb-nav-cta"
              >
                <i className="bi bi-whatsapp"></i>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
