"use client";

import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'motion/react';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function PortfolioContent() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const experiences = [
    {
      company: 'Schommer Media',
      role: 'Full Stack Web Developer',
      period: '09/2024 – Present',
      location: 'Marrakech, Morocco',
      desc: {
        en: 'Developed a Progressive Web App (PWA) to optimize property management and maintenance. Designed a centralized ticket management system enabling tenants to report facility issues. Worked on several client projects using TYPO3 and React.',
        fr: 'Développement d\'une Progressive Web App (PWA) pour optimiser la gestion et la maintenance immobilière. Conception d\'un système centralisé de gestion des tickets. Travail sur plusieurs projets clients utilisant TYPO3 et React.'
      },
      tech: 'ReactJs, Ionic, Laravel, MySQL, TYPO3'
    },
    {
      company: 'CloudLink',
      role: 'Full Stack Web Developer Intern',
      period: '03/2024 – 07/2024',
      location: 'Marrakech, Morocco',
      desc: {
        en: 'Developed a SaaS application assisting IBM ODM users in transforming workspace rules into machine learning models.',
        fr: 'Développement d\'une application SaaS aidant les utilisateurs d\'IBM ODM à transformer les règles d\'espace de travail en modèles d\'apprentissage automatique.'
      },
      tech: 'ReactJs, NodeJs, Machine Learning, Docker, MongoDB'
    },
    {
      company: 'ONDA',
      role: 'Software Developer Intern',
      period: '10/2021 – 12/2021',
      location: 'Marrakech, Morocco',
      desc: {
        en: 'Designed and developed a web application for managing employee files.',
        fr: 'Conception et développement d\'une application web pour la gestion des dossiers des employés.'
      },
      tech: 'Spring Boot, Angular'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Web Application',
      url: '#',
      image: 'https://picsum.photos/seed/ecommerce/800/600',
      tags: ['Node.js', 'React', 'Full Stack']
    },
    {
      title: 'Android Mobile Application',
      url: '#',
      image: 'https://picsum.photos/seed/mobile/800/600',
      tags: ['Android', 'Google Maps', 'Java']
    },
    {
      title: 'Node.js npm Package',
      url: 'https://www.npmjs.com/',
      image: 'https://picsum.photos/seed/npm/800/600',
      tags: ['Node.js', 'NPM', 'Crypto']
    },
    {
      title: 'Up To Marrakech',
      url: 'https://uptomarrakech.com/',
      image: 'https://picsum.photos/seed/marrakech/800/600',
      tags: ['WordPress', 'Freelance']
    },
    {
      title: 'Immigrate Brazil',
      url: 'https://immigratebrazil.com/',
      image: 'https://picsum.photos/seed/brazil/800/600',
      tags: ['WordPress', 'Freelance']
    },
    {
      title: 'Hair Medico',
      url: 'https://hairmedico-consultation.com/',
      image: 'https://picsum.photos/seed/hair/800/600',
      tags: ['React', 'Next.js']
    },
    {
      title: 'Istanbul Dent Spa',
      url: 'https://istanbuldentspa.com/',
      image: 'https://picsum.photos/seed/dent/800/600',
      tags: ['React', 'Next.js']
    },
    {
      title: 'Dental Medico',
      url: 'https://dentalmedico.com/',
      image: 'https://picsum.photos/seed/dental/800/600',
      tags: ['React', 'Next.js']
    },
    {
      title: 'Golden Hill Spa',
      url: 'https://goldenhill-spa.com/',
      image: 'https://picsum.photos/seed/spa/800/600',
      tags: ['WordPress']
    },
    {
      title: 'Clic To Convert',
      url: 'https://clictoconvert.com/',
      image: 'https://picsum.photos/seed/convert/800/600',
      tags: ['React', 'Next.js']
    }
  ];

  const skills = [
    { category: 'Languages', items: ['Java', 'PHP', 'Python', 'JavaScript', 'TypeScript'] },
    { category: 'Frameworks', items: ['React', 'Next.js', 'Angular', 'Laravel', 'Spring Boot', 'Node.js', 'Express.js'] },
    { category: 'CMS', items: ['WordPress', 'TYPO3'] },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'] },
    { category: 'DevOps', items: ['Docker', 'Git', 'Jira'] }
  ];

  const testimonials = [
    {
      name: 'Michael Schommer',
      role: 'CEO, Schommer Media',
      image: 'https://picsum.photos/seed/schommer/100/100',
      content: {
        en: 'Oussama is a highly skilled developer who consistently delivers high-quality work. His expertise in React and TYPO3 has been invaluable to our client projects.',
        fr: 'Oussama est un développeur hautement qualifié qui fournit constamment un travail de haute qualité. Son expertise en React et TYPO3 a été inestimable pour nos projets clients.'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager, CloudLink',
      image: 'https://picsum.photos/seed/cloudlink/100/100',
      content: {
        en: 'During his internship, Oussama showed great initiative and technical prowess in building our SaaS application. He is a fast learner and a great team player.',
        fr: 'Pendant son stage, Oussama a fait preuve d\'une grande initiative et de prouesses techniques dans la construction de notre application SaaS. Il apprend vite et a un excellent esprit d\'équipe.'
      }
    },
    {
      name: 'Ahmed Al-Marrakchi',
      role: 'Owner, Up To Marrakech',
      image: 'https://picsum.photos/seed/marrakech_client/100/100',
      content: {
        en: 'Working with Oussama on our tourism platform was a breeze. He understood our needs perfectly and delivered a fast, beautiful website.',
        fr: 'Travailler avec Oussama sur notre plateforme touristique a été un plaisir. Il a parfaitement compris nos besoins et a livré un site web rapide et magnifique.'
      }
    },
    {
      name: 'Dr. Selim Kaya',
      role: 'Director, Istanbul Dent Spa',
      image: 'https://picsum.photos/seed/dent_client/100/100',
      content: {
        en: 'Oussama built a modern, high-converting website for our clinic. His attention to detail and technical skills are top-notch.',
        fr: 'Oussama a construit un site web moderne et à fort taux de conversion pour notre clinique. Son souci du détail et ses compétences techniques sont de premier ordre.'
      }
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl relative z-10"
        >
          <div className="mb-8 relative inline-block">
             <motion.div 
               animate={{ 
                 rotate: 360,
                 scale: [1, 1.05, 1],
               }}
               transition={{ 
                 rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                 scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
               }}
               className="absolute -inset-6 border border-dashed border-primary/40 rounded-full"
             />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] relative z-10"
              >
                <Image 
                  src="https://picsum.photos/seed/oussama-pro/400/400" 
                  alt="Oussama Bentaouil" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
            {mounted ? t('hero_title').split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02, duration: 0.5 }}
              >
                {char}
              </motion.span>
            )) : t('hero_title')}
          </h1>
          <p className="text-xl md:text-3xl text-primary font-medium mb-8">
            {t('hero_subtitle')}
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero_description')}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf" // Placeholder for CV
              target="_blank"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <Download className="w-5 h-5" />
              {t('hero_cv_button')}
            </motion.a>
            <div className="flex items-center gap-4 ml-4">
              <a href="https://github.com/OussamaBentaouil70" target="_blank" className="p-3 hover:bg-accent rounded-full transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/oussama-bentaouil/" target="_blank" className="p-3 hover:bg-accent rounded-full transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:oussama.bentaouil.ob@gmail.com" className="p-3 hover:bg-accent rounded-full transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-accent/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">{t('about_title')}</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {language === 'en' 
                  ? "As a full stack web developer, I have built intuitive applications across various industries, combining expertise in user interface with robust backend functionality."
                  : "En tant que développeur web full stack, j'ai construit des applications intuitives dans divers secteurs, combinant expertise en interface utilisateur et fonctionnalités backend robustes."}
              </p>
              <p>
                {language === 'en'
                  ? "Currently at Schommer Media, I develop and maintain a variety of projects for internal use and a diverse clientele in the German market. I am eager to join a talented team where I can contribute my expertise and collaborate on innovative projects."
                  : "Actuellement chez Schommer Media, je développe et maintiens une variété de projets pour un usage interne et une clientèle diversifiée sur le marché allemand. Je suis impatient de rejoindre une équipe talentueuse où je pourrai apporter mon expertise et collaborer sur des projets innovants."}
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                <MapPin className="w-5 h-5" />
                Marrakech, Morocco
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, idx) => (
              <div key={idx} className={cn("p-6 rounded-3xl border bg-background shadow-sm", idx === 0 && "col-span-2")}>
                <h3 className="font-display font-bold mb-3 text-primary">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="text-sm px-3 py-1 bg-accent rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">{t('experience_title')}</h2>
          <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-border">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 items-start",
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="absolute left-[-5px] md:left-1/2 md:ml-[-5px] w-[10px] h-[10px] rounded-full bg-primary top-2" />
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                  <div className="p-8 rounded-3xl border bg-accent/10 backdrop-blur-sm hover:border-primary/50 transition-colors">
                    <span className="text-primary font-bold text-sm mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl font-display font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {language === 'en' ? exp.desc.en : exp.desc.fr}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.split(', ').map(t => (
                        <span key={t} className="text-xs px-2 py-1 bg-background border rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">{t('projects_title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden border bg-background/50 backdrop-blur-sm shadow-xl hover:shadow-primary/20 transition-all duration-500"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    {project.url.replace('https://', '')}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t('testimonials_title')}</h2>
            <p className="text-muted-foreground">{t('testimonials_subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border bg-accent/5 backdrop-blur-sm relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-primary/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  &quot;{language === 'en' ? testimonial.content.en : testimonial.content.fr}&quot;
                </p>
                <div className="absolute top-8 right-8 opacity-10">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                    <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM25 30V15C25 6.71573 31.7157 0 40 0V7.5C35.8579 7.5 32.5 10.8579 32.5 15H40V30H25Z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
