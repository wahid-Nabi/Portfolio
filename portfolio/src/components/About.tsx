const metrics = [
  { value: '3+', label: 'Years building software' },
  { value: '10+', label: 'Projects delivered' },
  { value: '5', label: 'Core technologies' },
]

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden border-b border-slate-800 px-6 py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_42%,rgba(34,211,238,0.09),transparent_28%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">About me</p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">Building useful software with a focus on the details.</h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <figure className="group relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] border border-cyan-400/20 transition-transform duration-500 group-hover:rotate-2" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-slate-700 bg-slate-900 shadow-2xl shadow-cyan-950/30">
              <img src="/waheed-nabi-portrait.jpeg" alt="Waheed Nabi" className="h-full w-full object-cover object-[center_30%] transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent px-6 pb-6 pt-20">
                <div>
                  <p className="text-base font-semibold text-slate-50">Waheed Nabi</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Software Engineer</p>
                </div>
                <span className="mb-1 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]" aria-label="Available for opportunities" />
              </figcaption>
            </div>
          </figure>

          <div>
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-slate-300">I'm Waheed Nabi, a Software Engineer with 3+ years of experience in C#, .NET Core, Web APIs, SQL Server, and React. I build scalable enterprise applications, efficient data solutions, and high-performance user interfaces.</p>
              <p className="text-base leading-relaxed text-slate-300">I have contributed to 10+ projects across full-stack and backend development, with a focus on clean architecture, SOLID principles, reusable code, and reliable API design.</p>
              <p className="text-base leading-relaxed text-slate-300">I also use Claude AI and GitHub Copilot for responsible AI-assisted development, code reviews, debugging, and rapid prototyping while retaining ownership of architecture and implementation.</p>
            </div>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-700 bg-slate-700 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="bg-slate-900 px-5 py-6 transition-colors duration-300 hover:bg-slate-800">
                  <dt className="text-3xl font-bold tracking-tight text-cyan-400">{metric.value}</dt>
                  <dd className="mt-2 text-xs leading-5 text-slate-400">{metric.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-2" aria-label="Primary technologies">
              {['C# / .NET', 'React', 'SQL Server', 'REST APIs'].map((technology) => (
                <span key={technology} className="rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300">{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About