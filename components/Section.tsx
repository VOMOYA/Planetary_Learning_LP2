
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', style }) => {
  return (
    <section className={`py-16 sm:py-24 ${className}`} style={style}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 tracking-wider">
      {children}
    </h2>
  );
};
