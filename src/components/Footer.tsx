import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm glow-text">
            © 2025 Rakchanaa R. Designed and Developed by Rakchanaa R.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
