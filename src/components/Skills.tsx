import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const technicalSkills = ['Java', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React'];
const tools = ['VS Code', 'Google Colab', 'GitHub', 'Figma', 'Canva'];
const softSkills = ['Leadership', 'Teamwork', 'Time Management', 'Punctuality'];
const learningSkills = ['React', 'Node.js', 'MongoDB'];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">What I know</span>
          <h2 className="heading-lg mt-4 gradient-text">Skills & Tools</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="card-glass p-8">
            <h3 className="heading-md text-foreground mb-6 text-center">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technicalSkills.map((skill, index) => (
                <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }} whileHover={{ scale: 1.1 }} className="skill-badge">{skill}</motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="card-glass p-8">
            <h3 className="heading-md text-foreground mb-6 text-center">Tools</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <motion.span key={tool} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }} whileHover={{ scale: 1.1 }} className="skill-badge">{tool}</motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="card-glass p-8">
            <h3 className="heading-md text-foreground mb-6 text-center">Soft Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill, index) => (
                <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }} whileHover={{ scale: 1.1 }} className="skill-badge">{skill}</motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="mt-12 card-glass p-8">
          <h3 className="heading-md text-foreground mb-8 text-center">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {learningSkills.map((skill, index) => (
              <motion.div key={skill} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }} whileHover={{ scale: 1.1, y: -5 }} className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-foreground font-semibold text-lg hover:glow-box transition-all duration-300">{skill}</motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;