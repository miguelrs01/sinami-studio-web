import React, { useEffect } from 'react';
import { About } from '../components/About';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-8">
      <About />
    </div>
  );
};