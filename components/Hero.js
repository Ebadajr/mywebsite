import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 bg-white rounded-full shadow-sm text-primary font-medium mb-6"
                    >
                        Computer Engineering Graduate - GUC
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-primary">Mazen Ebada</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
                        Adaptive Engineer | Automation Specialist | Problem Solver
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-teal-800 transition-colors flex items-center gap-2 shadow-lg shadow-primary/20"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="/Updated.pdf"
                            target="_blank"
                            className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 animate-pulse" />
                        <div className="absolute inset-4 bg-white rounded-full shadow-2xl overflow-hidden flex items-center justify-center border-4 border-white">
                            <img
                                src="/profile.JPG"
                                alt="Mazen Ebada"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    🛡️
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Focus</p>
                                    <p className="font-bold text-slate-800">Software Engineering</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    🤖
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Expertise</p>
                                    <p className="font-bold text-slate-800">Automation</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
