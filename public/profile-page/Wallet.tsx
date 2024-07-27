import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Wallet: React.FC<Props> = ({ width = 20, height = 20, color = '#A0A0A0' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3243_5573)">
        <mask id="mask0_3243_5573" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
          <path d="M19.9804 19.9805V0.0195904H0.0195312V19.9805H19.9804Z" fill="white" stroke="white" strokeWidth="0.0390624"/>
        </mask>
        <g mask="url(#mask0_3243_5573)">
          <path d="M15.4611 5.79901V4.39715C15.4611 3.62468 14.8349 2.99843 14.0624 2.99843H3.13857C2.36523 2.99843 1.73828 3.62538 1.73828 4.39872C1.73828 5.17206 2.36523 5.79901 3.13857 5.79901H16.863C17.6354 5.79901 18.2617 6.42525 18.2617 7.19772V9.29973V13.5859" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
          <path d="M18.2617 13.4993V15.6013C18.2617 16.3738 17.6354 17 16.863 17H3.13857C2.36523 17 1.73828 16.3731 1.73828 15.5997V4.39741" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
        </g>
        <circle cx="9.99881" cy="11.2488" r="3.58475" stroke={color} strokeWidth="1.34428"/>
        <rect x="8.78711" y="11.3125" width="1.61314" height="1.61314" rx="0.33607" transform="rotate(-45 8.78711 11.3125)" stroke={color} strokeWidth="0.896187"/>
      </g>
      <defs>
        <clipPath id="clip0_3243_5573">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Wallet;
