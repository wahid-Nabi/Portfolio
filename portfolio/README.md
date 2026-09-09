# 🎨 Animated Portfolio with Framer Motion

A modern, attractive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion animations. This portfolio is designed to captivate visitors with smooth animations, engaging interactions, and professional design.

## ✨ Features

- **Smooth Animations**: Leverages Framer Motion for fluid, eye-catching animations
- **Responsive Design**: Mobile-friendly layout that looks great on all devices
- **Modern UI**: Built with Tailwind CSS for a clean, contemporary aesthetic
- **Interactive Components**: Hover effects, micro-interactions, and smooth transitions
- **Contact Form**: Functional contact section with form validation
- **Performance Optimized**: Fast loading times with Vite bundler
- **TypeScript**: Full type safety for better development experience

## 🎯 Sections

1. **Navigation**: Sticky header with smooth animations
2. **Hero Section**: Eye-catching landing area with floating animations
3. **About Section**: Personal introduction and skills showcase
4. **Projects**: Featured projects with hover effects and project details
5. **Contact**: Contact form and social links

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx    # Navigation bar component
│   │   ├── Hero.tsx          # Hero section with animations
│   │   ├── About.tsx         # About and skills section
│   │   ├── Projects.tsx      # Projects showcase
│   │   └── Contact.tsx       # Contact form section
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # React DOM entry point
│   └── index.css             # Global styles
├── index.html                # HTML entry point
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite configuration
├── tailwind.config.cjs       # Tailwind configuration
└── postcss.config.cjs        # PostCSS configuration
```

## 🎬 Animation Features

The portfolio includes various animation techniques:

- **Page Transitions**: Smooth fade-in animations as sections come into view
- **Staggered Children**: Sequential animations for better visual flow
- **Hover Effects**: Interactive hover states on buttons and cards
- **Floating Elements**: Continuous animation effects
- **Gradient Shifts**: Dynamic gradient animations on backgrounds
- **Scroll Triggered**: Animations trigger as you scroll into view

## 🛠️ Tech Stack

- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.4"
}
```

## 🎨 Customization

### Colors
Edit the gradient colors in components by modifying the `from-*` and `to-*` Tailwind classes.

### Content
Update your personal information in:
- `Hero.tsx` - Main headline and CTA
- `About.tsx` - Bio and skills
- `Projects.tsx` - Your projects
- `Contact.tsx` - Contact information

### Animations
Adjust animation timing by modifying the `transition` and `variants` objects in each component.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own projects!

## 📄 License

This project is open source and available for personal use.

## 💡 Tips for Maximum Impact

1. **Add Real Content**: Replace placeholder text with your actual information
2. **Optimize Images**: Use optimized images for projects
3. **Update Links**: Connect social media and project links
4. **Test Responsiveness**: Check on multiple devices
5. **Performance**: Use Lighthouse to audit performance
6. **SEO**: Update meta tags in `index.html`

## 🔗 Deployment

Deploy easily to:
- **Vercel**: Push to GitHub, connect to Vercel
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Configure for static hosting
- **Heroku**: Use buildpack for Node.js

## 📞 Support

For issues or questions:
1. Check the Framer Motion docs: https://www.framer.com/motion/
2. Tailwind documentation: https://tailwindcss.com/docs
3. React docs: https://react.dev/

---

**Built with ❤️ using React, Framer Motion & Tailwind CSS**
