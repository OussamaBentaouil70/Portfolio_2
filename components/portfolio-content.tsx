"use client";

import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'motion/react';
import { ExternalLink, Github, Languages as LanguagesIcon, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import siteContent from '@/data/site-content.json';

export default function PortfolioContent() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const { hero, about, languages, experiences, projects, skills, testimonials } = siteContent;

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden isolate">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            className="h-full w-full object-cover"
            src={hero.backgroundVideo.url}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-slate-950"
            style={{ opacity: hero.backgroundVideo.overlayOpacity }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(59,130,246,0.32),transparent_42%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.24),transparent_35%)]" />
          <motion.div
            animate={{ opacity: [0.15, 0.28, 0.15], scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl"
          />
        </div>

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
                  src={hero.profileImage}
                  alt="Oussama Bentaouil" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tighter text-white">
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
              href={hero.cvUrl}
              target="_blank"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <Download className="w-5 h-5" />
              {t('hero_cv_button')}
            </motion.a>
            <div className="flex items-center gap-4 ml-4">
              <a href={hero.socialLinks.github} target="_blank" className="p-3 text-white hover:text-white hover:bg-white/15 rounded-full transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={hero.socialLinks.linkedin} target="_blank" className="p-3 text-white hover:text-white hover:bg-white/15 rounded-full transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={hero.socialLinks.email} className="p-3 text-white hover:text-white hover:bg-white/15 rounded-full transition-colors">
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
              {about.paragraphs[language].map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="flex items-center gap-2 text-primary font-medium">
                <MapPin className="w-5 h-5" />
                {about.location}
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

      {/* Languages Section */}
      <section id="languages" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-accent/30 text-primary shadow-sm">
              <LanguagesIcon className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">{t('languages_title')}</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {languages.map((languageItem, idx) => (
              <motion.div
                key={languageItem.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border bg-background/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm"
              >
                <div className="mb-5">
                  <h3 className="text-2xl font-display font-bold text-foreground">{languageItem.name}</h3>
                  <p className="mt-2 text-base text-primary font-medium">{languageItem.level}</p>
                </div>

                <div className="space-y-3">
                  <div className="h-2 overflow-hidden rounded-full bg-accent/70">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${languageItem.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 + idx * 0.08 }}
                      className="h-full rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                      {exp.tech.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-background border rounded-md">
                          {tech}
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
