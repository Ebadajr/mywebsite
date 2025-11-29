import React from 'react';
import { motion } from 'framer-motion';

const hobbies = [
    { name: 'Basketball', icon: '🏀' },
    { name: 'Football', icon: '⚽' },
    { name: 'Jogging', icon: '🏃' },
    { name: 'Playing Cards', icon: '🃏' },
    { name: 'Music', icon: '🎵' },
];

const Hobbies = () => {
    return (
        <section id="hobbies" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hobbies & Interests</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-2xl border border-slate-100 w-32 md:w-40 cursor-pointer"
                        >
                            <span className="text-4xl md:text-5xl">{hobby.icon}</span>
                            <span className="font-medium text-slate-700">{hobby.name}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white shadow-xl"
                >
                    <p className="text-lg font-light italic opacity-90">
                        "Listening to <span className="font-bold text-secondary">Gary Moore</span> while working makes me more productive"
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hobbies;
