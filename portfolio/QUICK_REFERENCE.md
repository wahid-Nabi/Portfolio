# Quick Reference: Common Customizations

## 🎨 Color Scheme Cheat Sheet

### Current Theme (Cyan-Blue)
```
Primary: cyan-400
Secondary: blue-500
Background: slate-900
Dark: slate-800
Light Text: slate-300
```

### Popular Alternatives

**Purple & Pink**
```tsx
from-purple-400 to-pink-500
text-purple-400
border-purple-500/50
bg-purple-500/20
```

**Green & Teal**
```tsx
from-emerald-400 to-teal-500
text-emerald-400
border-emerald-500/50
bg-emerald-500/20
```

**Orange & Red**
```tsx
from-orange-400 to-red-500
text-orange-400
border-orange-500/50
bg-orange-500/20
```

---

## 📝 Text Content Quick Edits

### Hero Section (Hero.tsx - Line ~30)
```tsx
// Change this:
"Creative Developer & Designer"
// To your title:
"Your Title Here"

// Change this:
"I build beautiful, interactive web experiences..."
// To your tagline
```

### About Section (About.tsx - Line ~45)
```tsx
// Update these paragraphs with your story
<motion.p variants={itemVariants} className="text-lg...">
  "I'm a passionate developer..."
</motion.p>
```

### Skills Section (About.tsx - Line ~65)
```tsx
const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express'] },
  { category: 'Tools', items: ['Git', 'Docker'] },
]
// Add/remove as needed
```

### Projects (Projects.tsx - Line ~12)
```tsx
const projects = [
  {
    title: 'Your Project',
    description: 'What it does',
    tags: ['Tech1', 'Tech2'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: '🎯',
  },
]
```

### Contact Info (Contact.tsx - Line ~90)
```tsx
<p className="text-slate-300">your.email@example.com</p>
<p className="text-slate-300">Based in Your City, Open to Remote</p>
```

---

## ⚡ Animation Timing Reference

### Standard Durations
```tsx
// Quick & snappy
transition: { duration: 0.3 }

// Smooth & natural (recommended)
transition: { duration: 0.6 }

// Slow & dramatic
transition: { duration: 1.2 }

// Very slow
transition: { duration: 2 }
```

### Stagger Values
```tsx
// Tight sequence
staggerChildren: 0.05

// Normal (recommended)
staggerChildren: 0.1

// Loose sequence
staggerChildren: 0.2

// Delayed start
delayChildren: 0.3
```

---

## 🎯 Common Animations

### Fade In & Up
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Scale & Pop
```tsx
initial={{ scale: 0.8, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.5 }}
```

### Slide From Left
```tsx
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
```

### Hover Lift
```tsx
whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
```

### Tap Animation
```tsx
whileTap={{ scale: 0.95 }}
```

---

## 📱 Responsive Breakpoints

Used in the portfolio:
```tsx
// Hidden on mobile, shown on medium+ screens
className="hidden md:flex"

// Full width on mobile, specific width on desktop
className="w-full md:w-1/2"

// Single column on mobile, 2 columns on desktop
className="grid md:grid-cols-2"

// Text size responsive
className="text-4xl md:text-6xl"
```

---

## 🔗 Link Updates

### Navigation Links (Navigation.tsx)
```tsx
href={`#${item.toLowerCase()}`}
// Connects to section IDs: #home, #about, #projects, #contact
```

### Social Links (Contact.tsx)
```tsx
{ name: 'GitHub', icon: '🐙', url: 'https://github.com/yourusername' },
{ name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourprofile' },
```

### Project Links (Projects.tsx)
```tsx
// Add onClick handler to project cards:
onClick={() => window.open('https://your-project-url.com')}
```

---

## 🎨 Adding Emojis

### Project Icons
```tsx
icon: '🎯' → Change to any emoji
Common: 🛍️ 📱 💻 🤖 🎨 📊 🔐 ⚡ 🌐 📸
```

### Social Icons
```tsx
'🐙' → GitHub
'💼' → LinkedIn
'𝕏' → Twitter/X
'✉️' → Email
'📱' → Phone
```

---

## 🚀 Deploy Commands

```bash
# Build for production
npm run build

# Test production build locally
npm run preview

# Start development server
npm run dev

# Install dependencies (run on your machine)
npm install
```

---

## 📊 Optimization Tips

### Image Optimization
```bash
# Use optimized images (compressed)
# Recommended tools: TinyPNG, ImageOptim, Squoosh
```

### Code Splitting
```tsx
// Already optimized with Vite
// No additional work needed
```

### Bundle Size
```bash
# Check before deployment
npm run build
# Look at dist folder size
```

---

## 🐛 Debug Animations

### Check if animation runs
```tsx
// Add console.log in variants
visible: {
  opacity: 1,
  y: 0,
  transition: { duration: 0.6 },
  // Add: onAnimationComplete: () => console.log('done')
}
```

### Disable animations for testing
```tsx
// Temporarily remove motion wrapper
// <motion.div> → <div>
```

### Check performance
```bash
# Use browser DevTools Performance tab
# Check for jank/dropped frames
```

---

## 📋 Pre-Deploy Checklist

- [ ] All text updated with your info
- [ ] Projects showcase your best work
- [ ] Links point to correct URLs
- [ ] Images are optimized
- [ ] Mobile responsive (tested)
- [ ] All animations smooth
- [ ] No console errors
- [ ] Meta tags updated
- [ ] Social links working
- [ ] Contact form functional

---

## 💡 Next Advanced Features

Want to add more? Consider:
1. **Dark/Light Mode Toggle** - Use React Context
2. **Blog Section** - Add markdown support
3. **Testimonials** - Add client quotes
4. **Pricing** - Add services section
5. **Analytics** - Integrate Google Analytics
6. **CMS Integration** - Connect to Contentful/Strapi
7. **Email Integration** - Use EmailJS/Formspree
8. **Comments** - Add Disqus or Giscus

---

**Happy customizing! Your portfolio is ready to shine! ✨**
