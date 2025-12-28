import "../styles/Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-inner container">
        {/* TITULO */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Construimos{" "}
          <span className="hero-highlight">experiencias web</span>
          <br />
          que impulsan resultados reales
        </motion.h1>

        {/* SUBTITULO */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Sitios web profesionales, modernos y optimizados para que tu negocio
          crezca y venda más.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://wa.me/543815624585"
            className="hero-btn hero-btn-main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
            Hablemos
          </a>

          <Link to="/servicios" className="hero-btn hero-btn-secondary">
            Ver servicios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
