import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Security: React.FC<Props> = ({ width = 20, height = 20, color = '#A0A0A0' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0007 18.3307C10.0007 18.3307 16.6673 14.9974 16.6673 9.9974V4.16406L10.0007 1.66406L3.33398 4.16406V9.9974C3.33398 14.9974 10.0007 18.3307 10.0007 18.3307Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default Security;
