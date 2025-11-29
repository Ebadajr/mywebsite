import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <p className="text-slate-400 max-w-sm">
                            Adaptive Engineer & Automation Specialist. Building efficient systems and solving complex problems.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:ebada.jr@gmail.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Mazen Ebada. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                        Built with <span className="text-white font-medium">Next.js</span> & <span className="text-white font-medium">React</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
