import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Emblem: React.FC<Props> = ({ width = 20, height = 20, color = '#A0A0A0' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.99935 12.5026C13.221 12.5026 15.8327 9.89093 15.8327 6.66927C15.8327 3.44761 13.221 0.835938 9.99935 0.835938C6.77769 0.835938 4.16602 3.44761 4.16602 6.66927C4.16602 9.89093 6.77769 12.5026 9.99935 12.5026Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.84232 11.5786L5.83398 19.1703L10.0007 16.6703L14.1673 19.1703L13.159 11.5703" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default Emblem;
