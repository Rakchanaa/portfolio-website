import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const technicalSkills = ['C', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'];
const tools = ['VS Code', 'Postman', 'Google Colab', 'GitHub', 'Figma', 'Canva', 'Lovable', 'Supabase'];
const softSkills = ['Leadership', 'Teamwork', 'Time Management'];

const SkillCard = ({ title, items, columns }: { title: string; items: string[]; columns: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6 }}
    className="skill-panel"
  >
    <div className="skill-panel-icon">
      <div className="skill-panel-icon-inner" />
    </div>
    <h3 className="heading-md text-foreground">{title}</h3>
    <div className={`grid w-full gap-4 ${columns === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
      {items.map((skill) => (
        <div key={skill} className="skill-pill">
          {skill}
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">What I know</span>
          <h2 className="heading-lg mt-4 gradient-text">Skills & Technologies</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr_0.85fr]">
          <SkillCard title="Technical Skills" items={technicalSkills} columns={1} />
          <SkillCard title="Tools" items={tools} columns={2} />
          <SkillCard title="Soft Skills" items={softSkills} columns={1} />
        </div>
      </div>
    </section>
  );
};

export default Skills;