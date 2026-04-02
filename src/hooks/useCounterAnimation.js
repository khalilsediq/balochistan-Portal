import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export function useCounterAnimation({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const incrementTime = 16;
      const totalSteps = Math.ceil(duration / incrementTime);
      const increment = target / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isIntersecting, target, duration]);

  return { count, ref };
}
