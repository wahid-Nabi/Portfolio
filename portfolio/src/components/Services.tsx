const services = [
  {
    number: '01',
    title: 'Web Applications',
    description: 'Turn your business idea into a responsive, reliable web application that is easy for customers and teams to use.',
    details: 'React, TypeScript, Next.js, Tailwind CSS',
  },
  {
    number: '02',
    title: 'Android Applications',
    description: 'Build practical Android experiences that help your customers discover, use, and stay connected with your business.',
    details: 'Product-focused mobile interfaces and API integration',
  },
  {
    number: '03',
    title: 'Backend & APIs',
    description: 'Create the secure foundation behind your product with scalable APIs, authentication, integrations, and dependable data storage.',
    details: 'C#, .NET Core, ASP.NET Web API, SQL Server',
  },
]

const Services = () => {
  return (
    <section id="services" className="border-y border-slate-800 bg-slate-950/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">Services</p>
          <h2 className="mb-5 text-4xl font-bold text-slate-50 md:text-5xl">Bring your business online.</h2>
          <p className="text-base leading-7 text-slate-400">From a first customer-facing website to a complete application platform, I can help you plan, build, and improve the digital product your business needs.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group rounded-xl border border-slate-700 bg-slate-900 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-400">{service.number}</span>
                <span className="h-px w-12 bg-slate-700 transition-colors duration-300 group-hover:bg-cyan-400" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-slate-50">{service.title}</h3>
              <p className="mb-6 text-sm leading-6 text-slate-400">{service.description}</p>
              <p className="text-xs font-medium leading-5 text-slate-300">{service.details}</p>
            </article>
          ))}
        </div>

        <a href="#contact" className="mt-12 inline-flex items-center gap-4 border-b border-cyan-400 pb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 transition-colors hover:text-cyan-400">Start a conversation <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}

export default Services
