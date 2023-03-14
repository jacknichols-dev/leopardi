import Link from 'next/link';
import React from 'react';

const Button = ({ color, bg, children, margin, type, width }) => {
  return (
    <button
      type={type}
      style={{
        color: color,
        backgroundColor: bg,
        margin: margin,
        width: width,
      }}
      className="btn"
    >
      {children}
    </button>
  );
};

export default Button;
