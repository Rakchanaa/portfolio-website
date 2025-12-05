import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Users } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: '1st Place',
    event: 'Code Debugging',
    venue: 'Christ the King Engineering College',
    date: 'October 2023',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: '2nd Place',
    event: 'Paper Presentation',
    venue: 'Sairam Engineering College',
    date: 'November 2023',
  },
];

const roles = [
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Accredited Member',
    organization: 'CSI KEC (Computer Society of India)',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Collaborative Developer',
    organization: 'Full-Stack Project Team',
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Recognition</span>
          <h2 className="heading-lg mt-4 gradient-text">Achievements & Roles</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="space-y-4">
            <h3 className="heading-md text-foreground mb-6">Competitions</h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.event}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="card-glass p-6 flex items-start gap-4"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground shrink-0 animate-pulse-glow">
                  {achievement.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-primary">{achievement.title}</span>
                    <span className="text-muted-foreground">—</span>
                    <span className="font-semibold text-foreground">{achievement.event}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{achievement.venue}</p>
                  <span className="text-xs text-primary/70">{achievement.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Roles */}
          <div className="space-y-4">
            <h3 className="heading-md text-foreground mb-6">Positions</h3>
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: -10 }}
                className="card-glass p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-primary shrink-0">
                  {role.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{role.title}</h4>
                  <p className="text-muted-foreground text-sm">{role.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
