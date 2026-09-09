import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <div className={`app-shell theme-${theme}`} style={{
      width: '100%',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      background: 'var(--page-bg)',
      overflowX: 'hidden'
    }}>
      {/* Fixed Navigation */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <Navigation theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      </div>

      {/* Main scrollable content */}
      <div style={{ marginTop: '64px' }}>
        {/* Hero Section */}
        <Hero />

        {/* Content sections */}
        <main style={{ background: 'var(--page-bg)' }}>
          <About />
          <Services />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
