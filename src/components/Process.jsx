import "../styles/Process.css";
import { motion } from "framer-motion";
import ProcessStep from "./ProcessStep";

function Process() {
  return (
    <section className="kb-process">
      <div className="container">
        {/* HEADER */}
        <motion.div
          className="kb-process-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="kb-section-title">Nuestro proceso</h2>
          <p className="kb-section-subtitle">
            Claro, simple y orientado a resultados
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="row g-4 mt-4">
          <div className="col-md-3">
            <ProcessStep
              number="01"
              title="Análisis"
              description="Entendemos tu negocio y tus objetivos."
              delay={0}
            />
          </div>

          <div className="col-md-3">
            <ProcessStep
              number="02"
              title="Diseño"
              description="UX/UI enfocado en conversión y experiencia."
              delay={0.1}
            />
          </div>

          <div className="col-md-3">
            <ProcessStep
              number="03"
              title="Desarrollo"
              description="Código limpio, rápido y escalable."
              delay={0.2}
            />
          </div>

          <div className="col-md-3">
            <ProcessStep
              number="04"
              title="Entrega"
              description="Publicación, pruebas y soporte continuo."
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
