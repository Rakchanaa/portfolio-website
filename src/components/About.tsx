import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Code, Palette, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: <Code className="w-6 h-6" />, title: "Web Development", desc: "Full-stack applications" },
    { icon: <Palette className="w-6 h-6" />, title: "UI/UX Design", desc: "User-centered design" },
    { icon: <Users className="w-6 h-6" />, title: "Team Collaboration", desc: "Effective teamwork" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Get to know me</span>
          <h2 className="heading-lg mt-4 gradient-text">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="heading-md text-foreground">Who I Am</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am an enthusiastic Computer Science and Design student with a strong interest in 
              web development, UI/UX design, and full-stack development. I thrive in collaborative 
              environments and am committed to continuous learning and improvement.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my B.E. at Kongu Engineering College, I focus on building 
              meaningful projects that solve real-world problems while maintaining clean, 
              efficient code and beautiful user interfaces.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="card-glass p-6 flex items-center gap-4 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-primary group-hover:gradient-bg group-hover:text-primary-foreground transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
