import { motion } from "framer-motion";
import { fadeUp } from "../animations";

function BenefitCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="kb-benefit-card"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ y: -6 }}
    >
      <i className={`bi ${icon}`}></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </motion.div>
  );
}

export default BenefitCard;
