import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { TRAVEL_EVA_FIGMA_URL } from './Hero';

const projects = [
	{
		title: 'Employee Management System',
		description:
			'A comprehensive web application for managing employee records, attendance tracking, and salary management with CRUD operations, responsive UI, and form validation.',
		tech: ['HTML', 'CSS', 'JavaScript'],
		role: 'Full Stack Developer',
		github: '#', // Replace with actual GitHub link
		image: null,
	},
	{
		title: 'Streetlight Management System',
		description:
			'A two-module platform (Admin & User) featuring employee management, attendance tracking, salary automation, product browsing, secure payment processing, and complaint handling.',
		tech: ['HTML', 'CSS', 'JavaScript', 'Backend'],
		role: 'Full Stack Developer',
		github: '#', // Replace with actual GitHub link
		image: null,
	},
	{
		title: 'Travel Eva (UI/UX)',
		description:
			'A Figma mobile app design for travel booking with a minimal-step booking flow, focusing on intuitive user experience and modern aesthetics.',
		tech: ['Figma', 'UI/UX Design'],
		role: 'UI/UX Designer',
		github: '#', // Replace with Figma link
		image: null,
	},
	{
		title: 'Portfolio',
		description:
			'A personal portfolio website showcasing my projects, skills, and experience. Built with modern technologies and featuring smooth animations and responsive design.',
		tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		role: 'Full Stack Developer',
		github: '#', // Replace with actual GitHub link
		image: null,
	},
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-50px' }}
				transition={{ duration: 0.5, delay: index * 0.1 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className="relative group card-glass overflow-hidden"
			>
				{/* Project Image or Placeholder */}
				<div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
					<div className="absolute inset-0 flex items-center justify-center">
						<span className="text-4xl font-bold gradient-text opacity-30">
							{project.title.charAt(0)}
						</span>
					</div>

					{/* Hover Overlay */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: isHovered ? 1 : 0 }}
						className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
					>
						<motion.a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground"
							aria-label="View code on GitHub"
						>
							<Github className="w-5 h-5" />
						</motion.a>
						<motion.button
							onClick={() => setShowModal(true)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground"
							aria-label="View project details"
						>
							<ExternalLink className="w-5 h-5" />
						</motion.button>
					</motion.div>
				</div>

				{/* Content */}
				<div className="p-6">
					<div className="flex items-center justify-between mb-2">
						<h3 className="font-bold text-lg text-foreground">{project.title}</h3>
						<span className="text-xs text-primary font-medium">{project.role}</span>
					</div>

					<p className="text-muted-foreground text-sm mb-4 line-clamp-2">
						{project.description}
					</p>

					<div className="flex flex-wrap gap-2">
						{project.tech.map((tech) => (
							<span
								key={tech}
								className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</motion.div>

			{/* Modal */}
			{showModal && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
					onClick={() => setShowModal(false)}
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						onClick={(e) => e.stopPropagation()}
						className="card-glass max-w-2xl w-full p-8 relative"
					>
						<button
							onClick={() => setShowModal(false)}
							className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
							aria-label="Close modal"
						>
							<X className="w-4 h-4" />
						</button>

						<h3 className="heading-md gradient-text mb-4">{project.title}</h3>
						<span className="inline-block text-sm text-primary font-medium mb-4">
							{project.role}
						</span>

						<p className="text-muted-foreground mb-6">{project.description}</p>

						<div className="flex flex-wrap gap-2 mb-6">
							{project.tech.map((tech) => (
								<span key={tech} className="skill-badge">
									{tech}
								</span>
							))}
						</div>

						{project.title === 'Travel Eva (UI/UX)' ? (
							<a
								href={TRAVEL_EVA_FIGMA_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="btn-primary inline-flex items-center gap-2"
							>
								<Github className="w-4 h-4" />
								View on Figma
							</a>
						) : (
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="btn-primary inline-flex items-center gap-2"
							>
								<Github className="w-4 h-4" />
								View on GitHub
							</a>
						)}
					</motion.div>
				</motion.div>
			)}
		</>
	);
};

const Projects = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<section id="projects" className="py-24 relative">
			<div className="section-container" ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold uppercase tracking-wider text-sm">
						My Work
					</span>
					<h2 className="heading-lg mt-4 gradient-text">Featured Projects</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<ProjectCard key={project.title} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
