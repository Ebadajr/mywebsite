import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        id: 1,
        company: 'Etisalat Egypt',
        role: 'Cybersecurity Engineer Intern',
        period: 'Summer 2023',
        duration: '6 weeks',
        description: 'Key achievements and responsibilities in cybersecurity operations.',
        color: 'bg-green-600'
    },
    {
        id: 2,
        company: 'Etisalat Egypt',
        role: 'Cybersecurity Engineer Intern (Senior Program)',
        period: 'February 2024 - June 2024',
        duration: '5 months',
        description: 'Advanced cybersecurity projects and threat analysis.',
        color: 'bg-green-700'
    },
    {
        id: 3,
        company: 'Tutoruu',
        role: 'Full Stack Software Developer',
        period: 'June 2023 - December 2023',
        duration: '6 months',
        description: 'Developed OpenAI-powered chatbot for Narmer School. Renovated company website frontend. Built comprehensive dashboard for University of Canada.',
        color: 'bg-purple-600'
    },
    {
        id: 4,
        company: 'THNDR',
        role: 'Automation Engineer',
        subRole: 'Previously: Customer Experience Representative (Intern)',
        period: 'September 2024 - Present',
        duration: 'Ongoing',
        description: 'Operations Efficiency Excellence Team. Identifies and automates repetitive tasks using n8n, Python, and other technologies. Proven problem-solving and system optimization skills.',
        color: 'bg-blue-600'
    }
];

const ExperienceCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + experiences.length) % experiences.length);
    };

    return (
        <section id="experience" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="relative h-[500px] md:h-[400px] max-w-4xl mx-auto">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full h-full"
                        >
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col md:flex-row">
                                <div className={`md:w-1/3 ${experiences[currentIndex].color} p-8 text-white flex flex-col justify-center`}>
                                    <Briefcase size={48} className="mb-4 opacity-80" />
                                    <h3 className="text-2xl font-bold mb-2">{experiences[currentIndex].company}</h3>
                                    <div className="flex items-center gap-2 opacity-90">
                                        <Calendar size={16} />
                                        <span className="text-sm">{experiences[currentIndex].period}</span>
                                    </div>
                                </div>

                                <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                                    <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">{experiences[currentIndex].role}</h4>
                                    {experiences[currentIndex].subRole && (
                                        <p className="text-slate-500 text-sm mb-4 italic">{experiences[currentIndex].subRole}</p>
                                    )}
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mb-4">
                                            {experiences[currentIndex].duration}
                                        </span>
                                        <p className="text-slate-600 leading-relaxed">
                                            {experiences[currentIndex].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button
                        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-slate-700 hover:text-primary transition-colors z-10"
                        onClick={() => paginate(-1)}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-slate-700 hover:text-primary transition-colors z-10"
                        onClick={() => paginate(1)}
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots */}
                    <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
                        {experiences.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-slate-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceCarousel;
