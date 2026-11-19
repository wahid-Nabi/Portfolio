const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['C#', '.NET 8 / .NET Core', 'ASP.NET Web API', 'RESTful APIs'] },
    { category: 'Data & Persistence', items: ['SQL Server', 'Dapper', 'Entity Framework Core', 'Stored Procedures'] },
    { category: 'Cloud & DevOps', items: ['Microsoft Azure', 'Azure DevOps (Repos, Boards)', 'GitHub Actions (CI/CD)', 'ASP.NET Core Publish', 'Kudu ZIP Deployment'] },
    { category: 'AI-Assisted Development', items: ['Claude AI', 'GitHub Copilot', 'Code Reviews', 'Debugging', 'Refactoring', 'Rapid Prototyping'] },
  ]

  return (
    <section id="skills" className="py-24 px-6 md:py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden p-8 bg-slate-900 rounded-xl border border-slate-700 hover:-translate-y-1 hover:border-cyan-400/60 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-50 mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
