import "../styles/CTA.css";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="kb-cta">
      <motion.div
        className="container kb-cta-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2>¿Listo para llevar tu proyecto al siguiente nivel?</h2>
        <p>
          Hablemos y armemos una solución digital a medida para tu negocio.
        </p>

        <motion.a
          href="https://wa.me/543815624585"
          target="_blank"
          rel="noopener noreferrer"
          className="kb-cta-btn"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
        >
          <i className="bi bi-whatsapp"></i>
          Contactar por WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}

export default CTA;
