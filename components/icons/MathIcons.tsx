
import React from 'react';

export const SigmaIcon: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l7.5-7.5L4.5 4.5M19.5 4.5l-7.5 7.5 7.5 7.5" />
  </svg>
);

export const InfinityIcon: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5s-3-2-6 0c-3 2-3 5 0 7s6 5 6 5m-1.5-9.5s3 2 6 0c3-2 3-5 0-7s-6-5-6-5" />
  </svg>
);

export const CompassIcon: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6.364-6.364L12 12l6.364 6.364M3.636 9.636L12 12l8.364-2.364" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
  </svg>
);
