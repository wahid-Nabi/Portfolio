const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">Experience</h2>
          <p className="text-slate-400">Professional work history and career progression</p>
        </div>

        <div className="relative space-y-8 before:absolute before:bottom-6 before:left-[11px] before:top-6 before:w-px before:bg-slate-700 md:before:left-[15px]">
          <article className="relative ml-6 border border-slate-700 rounded-xl p-8 bg-slate-900 hover:border-cyan-400/60 transition-colors duration-300 md:ml-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-xl font-semibold text-slate-50">FullStack Software Engineer</h3>
                <p className="text-cyan-400 font-medium">CodeMites</p>
              </div>
              <span className="text-sm text-slate-400">2024 – Present</span>
            </div>
            <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc list-inside">
              <li>Develop REST APIs and responsive user interfaces.</li>
              <li>Assist with development, testing, and debugging of web applications.</li>
              <li>Participate in training sessions focused on modern web technologies.</li>
              <li>Use C#, ASP.NET Core, .NET, SQL Server, JavaScript, TypeScript, React, Next.js, and Tailwind.</li>
              <li>Apply Claude AI and GitHub Copilot for code reviews, debugging, and rapid prototyping.</li>
            </ul>
          </article>

          <article className="relative ml-6 border border-slate-700 rounded-xl p-8 bg-slate-900 hover:border-cyan-400/60 transition-colors duration-300 md:ml-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-xl font-semibold text-slate-50">.NET Developer</h3>
                <p className="text-cyan-400 font-medium">D.I. Infotech Pvt. Ltd.</p>
              </div>
              <span className="text-sm text-slate-400">Apr 2022 – Apr 2024</span>
            </div>
            <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc list-inside">
              <li>Developed REST APIs with a team of around six people under team-lead supervision.</li>
              <li>Participated in training sessions, workshops, and seminars.</li>
              <li>Worked with C#, .NET Framework 4.5, .NET Core, and Git.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
