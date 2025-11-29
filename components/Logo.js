import React from 'react';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg group-hover:bg-secondary transition-colors duration-300">
                ME
            </div>
            <span className="font-bold text-xl text-primary group-hover:text-secondary transition-colors duration-300 hidden sm:block">
                Mazen Ebada
            </span>
        </Link>
    );
};

export default Logo;
