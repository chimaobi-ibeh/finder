import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({ children, onClick, className, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}