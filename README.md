# Oussama Bentaouil | Full Stack Developer Portfolio

A modern, high-performance, and multilingual portfolio website built with **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion**. This project showcases the professional journey, skills, and projects of Oussama Bentaouil.

## 🚀 Features

- **Multilingual Support**: Toggle between English and French seamlessly using a custom `useLanguage` hook.
- **Dark & Light Mode**: Fully responsive theme switching powered by `next-themes`.
- **Modern UI/UX**: 
  - Interactive **Background Beams** for an immersive visual experience.
  - Smooth scroll animations and staggered entrance effects using **Framer Motion**.
  - Custom typography with **Inter** and **Space Grotesk**.
- **Contact Integration**: Fully functional contact form integrated with **EmailJS** for direct inquiries.
- **Responsive Design**: Optimized for all devices, from mobile to ultra-wide desktops.
- **Project Showcase**: Detailed cards for featured projects with hover effects.
- **Experience Timeline**: A structured view of professional background and education.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter, Space Grotesk)

## 📁 Project Structure

```text
├── app/                # Next.js App Router (Layouts, Pages, Globals)
├── components/         # Reusable UI components (Navbar, Footer, Hero, etc.)
├── hooks/              # Custom React hooks (useLanguage)
├── public/             # Static assets (Images, CV)
├── lib/                # Utility functions
└── metadata.json       # App metadata and permissions
```

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file and add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Oussama Bentaouil](https://www.linkedin.com/in/oussama-bentaouil/)
