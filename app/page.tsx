"use client";

import React from 'react';
import { LanguageProvider } from '@/hooks/use-language';
import Navbar from '@/components/navbar';
import PortfolioContent from '@/components/portfolio-content';
import ContactForm from '@/components/contact-form';
import Footer from '@/components/footer';
import BackgroundBeams from '@/components/background-beams';

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative">
        <BackgroundBeams />
        <Navbar />
        <PortfolioContent />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
