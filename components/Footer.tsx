import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="font-orbitron text-lg text-white">PLANETARY LEARNING</p>
                <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Planetary Learning. All Rights Reserved.</p>
            </div>
        </footer>
    );
};