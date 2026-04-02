"use client";

import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import siteContent from '@/data/site-content.json';

export default function Footer() {
  const { t } = useLanguage();
  const { footer, hero } = siteContent;
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
            © {year || '...'} {footer.fullName}. {t('footer_rights')}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={footer.phone.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2" title={footer.phone.title}>
            <Phone className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">{footer.phone.label}</span>
          </a>
          <a href={hero.socialLinks.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={hero.socialLinks.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={hero.socialLinks.email} className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
