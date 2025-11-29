import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: 'Cybersecurity',
        skills: ['Network Security', 'Threat Analysis', 'Penetration Testing', 'Security Operations'],
        color: 'bg-red-50 text-red-700 border-red-100'
    },
    {
        category: 'Full Stack Development',
        skills: ['React', 'Next.js', 'Node.js', 'JavaScript/TypeScript', 'Tailwind CSS'],
        color: 'bg-blue-50 text-blue-700 border-blue-100'
    },
    {
        category: 'Automation & Data',
        skills: ['n8n', 'Python', 'Scripting', 'Database Management', 'Process Optimization'],
        color: 'bg-green-50 text-green-700 border-green-100'
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-3 py-1 rounded-full text-sm font-medium border ${category.color}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
