import React from 'react';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';

const StatCounter = React.memo(({ target, title, prefix = '', suffix = '' }) => {
  const { count, ref } = useCounterAnimation({ target, duration: 2500 });
  
  // Format with commas if large number
  const displayCount = count >= 1000 
    ? count.toLocaleString() 
    : count;

  return (
    <div ref={ref} className="text-center p-6 pb-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
      <div className="text-3xl md:text-5xl font-bold text-gov-gold mb-2 shadow-sm drop-shadow-md tracking-tight">
        {prefix}{displayCount}{suffix}
      </div>
      <div className="text-sm md:text-base text-white/90 font-medium uppercase tracking-wide">
        {title}
      </div>
    </div>
  );
});

export default StatCounter;
