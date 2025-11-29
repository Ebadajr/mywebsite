import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'AI Chatbot for Narmer School',
        description: 'Developed an OpenAI-powered chatbot to assist students and parents with inquiries, improving response time and user engagement.',
        tech: ['OpenAI API', 'React', 'Node.js'],
        category: 'AI & Web Dev'
    },
    {
        title: 'University Dashboard',
        description: 'Built a comprehensive dashboard for the University of Canada to visualize student data and administrative metrics.',
        tech: ['React', 'Data Visualization', 'Rest API'],
        category: 'Frontend'
    },
    {
        title: 'Operations Automation Suite',
        description: 'A collection of scripts and n8n workflows to automate repetitive operational tasks, significantly reducing manual effort.',
        tech: ['n8n', 'Python', 'Automation'],
        category: 'Automation'
    },
    {
        title: 'Tutoruu Website Renovation',
        description: 'Revamped the frontend of the company website to improve user experience and modernize the design interface.',
        tech: ['React', 'CSS', 'UI/UX'],
        category: 'Frontend'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="h-48 bg-slate-200 relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-500 to-teal-400' : 'from-purple-500 to-pink-400'} opacity-80 group-hover:scale-105 transition-transform duration-500`} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl opacity-50">{project.category}</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                                        <Github size={18} /> View Code
                                    </button>
                                    <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                                        <ExternalLink size={18} /> Live Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
