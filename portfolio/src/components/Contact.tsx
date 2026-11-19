import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Unable to send message')
      setFormData({ name: '', email: '', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/wahid-Nabi' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Email', icon: '✉️', url: '#' },
  ]

  return (
    <section id="contact" className="py-24 px-6 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">Get In Touch</h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-slate-50 placeholder-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors duration-200 text-sm"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-slate-50 placeholder-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors duration-200 text-sm"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-slate-50 placeholder-slate-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors duration-200 text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-semibold rounded-lg transition-colors duration-200 text-sm"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p role="status" className="text-sm text-green-400">Thank you! Your message has been sent.</p>}
              {status === 'error' && <p role="alert" className="text-sm text-red-400">Sorry, your message could not be sent. Please try again or email me directly.</p>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="p-8 bg-slate-900 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors duration-200">
              <h3 className="text-sm font-semibold text-slate-200 mb-3">Email</h3>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wahidnabi785@gmail.com" target="_blank" rel="noreferrer" className="text-slate-400 text-sm hover:text-cyan-400">wahidnabi785@gmail.com</a>
            </div>

            {/* Location Card */}
            <div className="p-8 bg-slate-900 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors duration-200">
              <h3 className="text-sm font-semibold text-slate-200 mb-3">Location</h3>
              <p className="text-slate-400 text-sm">+91 9596578282</p>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-slate-900 rounded-lg border border-slate-700">
              <h3 className="text-sm font-semibold text-slate-200 mb-4">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.name === 'LinkedIn' ? 'https://www.linkedin.com/in/wahidnabi/' : link.url}
                    target={link.name === 'LinkedIn' || link.name === 'GitHub' ? '_blank' : undefined}
                    rel={link.name === 'LinkedIn' || link.name === 'GitHub' ? 'noreferrer' : undefined}
                    className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 text-lg"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Waheed Nabi. Built with React, Framer Motion & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
