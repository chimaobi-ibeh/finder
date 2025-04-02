import React from 'react';

interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded ${className}`}
    >
      ✅ {text}
    </span>
  );
}