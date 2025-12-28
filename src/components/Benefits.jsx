import "../styles/Benefits.css";
import { motion } from "framer-motion";
import BenefitCard from "./BenefitCard";

function Benefits() {
  return (
    <section className="kb-benefits">
      <div className="container">
        {/* HEADER */}
        <motion.div
          className="kb-benefits-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Por qué elegir KBOOMDEV?</h2>
          <p>Soluciones pensadas para negocios que venden</p>
        </motion.div>

        {/* GRID */}
        <div className="row g-4 mt-4">
          <div className="col-md-3">
            <BenefitCard
              icon="bi-speedometer2"
              title="Rápido"
              description="Webs optimizadas que cargan rápido y retienen usuarios."
              delay={0}
            />
          </div>

          <div className="col-md-3">
            <BenefitCard
              icon="bi-phone"
              title="Responsive"
              description="Diseños perfectos en celular, tablet y desktop."
              delay={0.1}
            />
          </div>

          <div className="col-md-3">
            <BenefitCard
              icon="bi-shield-lock"
              title="Seguro"
              description="Buenas prácticas, seguridad y soporte continuo."
              delay={0.2}
            />
          </div>

          <div className="col-md-3">
            <BenefitCard
              icon="bi-graph-up"
              title="Orientado a ventas"
              description="Diseño pensado para convertir visitas en clientes."
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
