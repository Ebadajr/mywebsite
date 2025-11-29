import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">About Me</h2>
                        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-8">
                            "I am an adaptive engineer who loves to lead, love to learn, and love to leave my mark"
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 text-2xl">
                                    🧩
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Problem Solver</h3>
                                <p className="text-slate-600">
                                    I approach challenges with a strategic mindset, breaking down complex problems into manageable solutions.
                                </p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4 text-2xl">
                                    📚
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Continuous Learner</h3>
                                <p className="text-slate-600">
                                    Technology never stops evolving, and neither do I. I'm constantly expanding my skillset to stay ahead.
                                </p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 text-2xl">
                                    🚀
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Adaptive Leader</h3>
                                <p className="text-slate-600">
                                    Whether leading a team or working independently, I adapt to any situation to drive results and innovation.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
