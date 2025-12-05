import { motion } from 'framer-motion';

interface FloatingIconProps {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const FloatingIcon = ({ icon, className = '', delay = 0, duration = 6 }: FloatingIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-muted/50 backdrop-blur-sm border border-border text-primary glow-box"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};

export default FloatingIcon;
