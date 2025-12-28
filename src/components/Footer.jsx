import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="kb-footer">
      <motion.div
        className="container kb-footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* BRAND */}
        <div className="kb-footer-brand">
          <h3>
            KBOOM<span>DEV</span>
          </h3>
          <p>Desarrollo web profesional orientado a resultados reales.</p>
        </div>

        {/* LINKS */}
        <div className="kb-footer-links">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/nosotros">Nosotros</Link>
        </div>

        {/* SOCIAL */}
        <div className="kb-footer-social">
          <a
            href="https://wa.me/543815624585"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </motion.div>

      <div className="kb-footer-bottom">
        © {new Date().getFullYear()} KBOOMDEV — Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer;
