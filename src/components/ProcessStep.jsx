import { motion } from "framer-motion";
import { fadeUp } from "../animations";

function ProcessStep({ number, title, description, delay = 0 }) {
  return (
    <motion.div
      className="kb-step"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ y: -6 }}
    >
      <span>{number}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </motion.div>
  );
}

export default ProcessStep;
