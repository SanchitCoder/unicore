import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden w-full max-w-[100vw] min-w-0">
      <Navbar />
      <main className="flex-1 min-w-0 w-full max-w-full">{children}</main>
      <Footer />
    </div>
  );
}
