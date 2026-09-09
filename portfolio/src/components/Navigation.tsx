import React from 'react'

type NavigationProps = {
  theme: string
  onToggleTheme: () => void
}

const Navigation = ({ theme, onToggleTheme }: NavigationProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-700">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <a href="#home" className="group inline-flex items-center gap-3" aria-label="Wahid Nabi — home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500 text-sm font-black tracking-tight text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-transform duration-200 group-hover:scale-105">
              WN
            </span>
            <span className="sr-only">Wahid Nabi</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle hidden md:inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-slate-50 text-2xl transition-colors duration-150"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2 border-t border-slate-700 pt-4">
            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle self-start inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
              {theme === 'dark' ? 'Light theme' : 'Dark theme'}
            </button>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-150 py-2 text-sm"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navigation
