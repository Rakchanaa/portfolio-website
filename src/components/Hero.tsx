import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import FloatingIcon from './FloatingIcon';
import { ReactIcon, NodeIcon, MongoIcon, JavaIcon, GitHubIcon, LinkedInIcon, GmailIcon } from './TechIcons';

// Export the Travel EVA Figma URL and helper so the Projects page can open it directly
export const TRAVEL_EVA_FIGMA_URL =
  'https://www.figma.com/proto/Qr8gkGML82JIJbo7uJLfj8/Travel-EVA?node-id=86-18&t=vY4RT5cTaQpj8OKa-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3&show-proto-sidebar=1';

export const openTravelEVA = () => {
  window.open(TRAVEL_EVA_FIGMA_URL, '_blank', 'noopener,noreferrer');
};

// Export openMail so ContactForm can import and use it
export const openMail = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const to = 'rakchanaar9@gmail.com';
  // attempt Outlook protocol (works when Outlook is installed and protocol registered)
  window.open(`ms-outlook://compose?to=${to}`);
  // fallback to default mail client
  setTimeout(() => {
    window.location.href = `mailto:${to}`;
  }, 600);
};

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Vibe Coder'];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      if (displayedRole.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedRole.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedRole(displayedRole.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayedRole, isTyping, currentRoleIndex]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // resume (Google Drive) — opens in a new tab
  const DRIVE_RESUME_URL = 'https://drive.google.com/file/d/13U46nxnWXVCqrQYAf60fWO-Uu5e1xqbe/view?usp=sharing';
  const openResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(DRIVE_RESUME_URL, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="section-container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-muted-foreground font-medium mb-2 text-lg"
            >
              Hi Myself,
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-xl mb-4"
            >
              <span className="gradient-text">Rakchanaa R</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <span className="text-lg text-muted-foreground">And I'm a </span>
              <span className="text-xl font-semibold text-primary">
                {displayedRole}
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* opens your resume (Google Drive) in a new tab */}
              <a href={DRIVE_RESUME_URL} onClick={openResume} className="btn-primary" target="_blank" rel="noopener noreferrer" aria-label="Open Resume">
                Open Resume
              </a>
              <button onClick={scrollToContact} className="btn-outline">
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-6 justify-center lg:justify-start"
            >
              {/* Lets connect — open exact targets you provided */}
              <motion.a
                href="https://www.linkedin.com/in/rakchanaa-ravikumar-5485a2259/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-box transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://github.com/Rakchanaa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-box transition-all duration-300"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="mailto:rakchanaar9@gmail.com"
                onClick={openMail}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-box transition-all duration-300"
                aria-label="Gmail"
              >
                <GmailIcon className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative flex justify-center order-1 lg:order-2">
            <FloatingIcon icon={<ReactIcon />} className="top-0 left-10 sm:left-0" delay={0.5} duration={5} />
            <FloatingIcon icon={<NodeIcon />} className="top-20 right-5 sm:right-0" delay={0.7} duration={6} />
            <FloatingIcon icon={<MongoIcon />} className="bottom-20 left-5 sm:left-5" delay={0.9} duration={7} />
            <FloatingIcon icon={<JavaIcon />} className="bottom-10 right-10 sm:right-10" delay={1.1} duration={5.5} />

            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl transform scale-75" />
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-box">
                {/* profile image from public/profile.jpg */}
                <img src="/profile.jpg" alt="Rakchanaa R" className="w-full h-full object-cover block" loading="lazy" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;