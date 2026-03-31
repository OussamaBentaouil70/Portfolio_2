"use client";

import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const [year, setYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="text-2xl font-display font-bold tracking-tighter mb-2">
            OB<span className="text-primary">.</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {year || '...'} Oussama Bentaouil. {t('footer_rights')}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:+212618115141" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2" title="+212 6 18 11 51 41">
            <Phone className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">+212 6 18 11 51 41</span>
          </a>
          <a href="https://github.com/OussamaBentaouil70" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/oussama-bentaouil/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:oussama.bentaouil.ob@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
