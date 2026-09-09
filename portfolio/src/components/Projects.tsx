const Projects = () => {
  const projects = [
    {
      title: 'TaskMate',
      description: 'A service platform matching posted tasks with nearby providers, with Stripe payments, OTP email verification, FCM notifications, and task tracking.',
      tags: ['C#', 'ASP.NET Core', 'SQL Server', 'EF Core', 'Stripe'],
      icon: '🛍️',
    },
    {
      title: 'Indian Tours and Travels',
      description: 'A travel platform exploring the diverse landscapes and rich culture of India, built with a React UI and C# .NET backend.',
      tags: ['React', 'C# .NET', 'REST APIs'],
      icon: '✓',
    },
    {
      title: 'WomanCart',
      description: "An e-commerce platform tailored to women's needs, with ShipRocket integration, optimized stored procedures, and a responsive React interface.",
      tags: ['React', 'C# .NET', 'ShipRocket', 'SQL Server'],
      icon: '🤖',
    },
    {
      title: 'Professional Experience',
      description: 'FullStack Software Engineer at CodeMites (2024–present) and .NET Developer at D.I. Infotech (Apr 2022–Apr 2024).',
      tags: ['.NET', 'Web APIs', 'React', 'Tailwind'],
      icon: '🎨',
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden p-8 bg-slate-900 rounded-xl border border-slate-700 hover:-translate-y-1 hover:border-cyan-400/60 transition-all duration-300"
            >
              {/* Header with icon and title */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-50 flex-1">{project.title}</h3>
                <span className="text-3xl ml-4 flex-shrink-0">{project.icon}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <a
                href="#"
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* View all projects button */}
      </div>
    </section>
  )
}

export default Projects
