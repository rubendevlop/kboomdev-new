import { motion } from "framer-motion";
import { fadeUp } from "../animations";

function ServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="kb-service"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ y: -8 }}
    >
      <i className={`bi ${icon}`}></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </motion.div>
  );
}

export default ServiceCard;
