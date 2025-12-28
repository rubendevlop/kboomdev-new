import "../styles/Services.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="kb-services">
      <div className="container">
        {/* HEADER */}
        <motion.div
          className="kb-services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="kb-section-title">Servicios</h2>
          <p className="kb-section-subtitle">
            Diseñamos, desarrollamos y potenciamos productos digitales
          </p>
        </motion.div>

        {/* GRID */}
        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <ServiceCard
              icon="bi-globe"
              title="Web Institucional"
              description="Sitios modernos, rápidos y profesionales que representan tu marca."
              delay={0}
            />
          </div>

          <div className="col-md-4">
            <ServiceCard
              icon="bi-cart4"
              title="Tiendas Online"
              description="Ecommerce listos para vender con pagos, productos y gestión."
              delay={0.1}
            />
          </div>

          <div className="col-md-4">
            <ServiceCard
              icon="bi-gear"
              title="Sistemas a Medida"
              description="Paneles, dashboards y soluciones internas personalizadas."
              delay={0.2}
            />
          </div>

          <div className="col-md-4">
            <ServiceCard
              icon="bi-speedometer2"
              title="Optimización & Performance"
              description="Mejoramos velocidad, SEO y experiencia de usuario."
              delay={0.3}
            />
          </div>

          <div className="col-md-4">
            <ServiceCard
              icon="bi-shield-check"
              title="Mantenimiento & Soporte"
              description="Actualizaciones, seguridad y soporte continuo."
              delay={0.4}
            />
          </div>

          <div className="col-md-4">
            <ServiceCard
              icon="bi-graph-up"
              title="Escalabilidad"
              description="Pensado para crecer junto a tu negocio."
              delay={0.5}
            />
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/servicios" className="btn kb-btn-secondary">
            Ver todos los servicios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
