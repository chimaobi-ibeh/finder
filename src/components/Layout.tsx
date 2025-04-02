import React from 'react';
import NavBar from './NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}