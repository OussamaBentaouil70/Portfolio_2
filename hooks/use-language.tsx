"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_about: 'About',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_testimonials: 'Testimonials',
    nav_contact: 'Contact',
    hero_title: "Hi, I'm Oussama Bentaouil",
    hero_subtitle: 'Full Stack Web Developer',
    hero_description: 'Building intuitive applications with robust backend functionality and modern frontend experiences.',
    hero_cv_button: 'View CV',
    about_title: 'About Me',
    experience_title: 'Experience',
    projects_title: 'Featured Projects',
    contact_title: 'Get In Touch',
    contact_name: 'Name',
    contact_email: 'Email',
    contact_message: 'Message',
    contact_send: 'Send Message',
    contact_sending: 'Sending...',
    contact_success: 'Message sent successfully!',
    contact_error: 'Failed to send message. Please try again.',
    footer_rights: 'All rights reserved.',
    skills_title: 'Skills & Expertise',
    edu_title: 'Education',
    testimonials_title: 'Testimonials',
    testimonials_subtitle: 'What people say about my work',
  },
  fr: {
    nav_about: 'À propos',
    nav_experience: 'Expérience',
    nav_projects: 'Projets',
    nav_testimonials: 'Témoignages',
    nav_contact: 'Contact',
    hero_title: "Salut, je suis Oussama Bentaouil",
    hero_subtitle: 'Développeur Web Full Stack',
    hero_description: 'Création d\'applications intuitives avec des fonctionnalités backend robustes et des expériences frontend modernes.',
    hero_cv_button: 'Voir le CV',
    about_title: 'À propos de moi',
    experience_title: 'Expérience',
    projects_title: 'Projets en vedette',
    contact_title: 'Contactez-moi',
    contact_name: 'Nom',
    contact_email: 'Email',
    contact_message: 'Message',
    contact_send: 'Envoyer le message',
    contact_sending: 'Envoi en cours...',
    contact_success: 'Message envoyé avec succès !',
    contact_error: 'Échec de l\'envoi du message. Veuillez réessayer.',
    footer_rights: 'Tous droits réservés.',
    skills_title: 'Compétences et Expertise',
    edu_title: 'Éducation',
    testimonials_title: 'Témoignages',
    testimonials_subtitle: 'Ce que les gens disent de mon travail',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
