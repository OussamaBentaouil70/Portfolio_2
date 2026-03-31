"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/hooks/use-language';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    emailjs
      .sendForm(
        'service_uzx4k3m',
        'template_bfdqloh',
        formRef.current,
        'GXdjCLqPZvAJRIB70'
      )
      .then(
        () => {
          setStatus('success');
          formRef.current?.reset();
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t('contact_title')}</h2>
          <p className="text-muted-foreground">
            {t('nav_contact')}
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-6 bg-accent/30 p-8 rounded-3xl border backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="user_name" className="text-sm font-medium ml-1">
                {t('contact_name')}
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-xl bg-background border focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="user_email" className="text-sm font-medium ml-1">
                {t('contact_email')}
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-xl bg-background border focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium ml-1">
              {t('contact_message')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-background border focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === 'sending' ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
                {t('contact_sending')}
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {t('contact_send')}
              </>
            )}
          </button>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-green-500 justify-center font-medium"
              >
                <CheckCircle2 className="w-5 h-5" />
                {t('contact_success')}
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-destructive justify-center font-medium"
              >
                <AlertCircle className="w-5 h-5" />
                {t('contact_error')}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
