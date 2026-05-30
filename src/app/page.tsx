const tools = [
  ["Analytics & CRM", ["GA4", "Tableau", "HubSpot", "Salesforce", "Excel", "SQL"]],
  ["Marketing", ["SEO", "Mailchimp", "WordPress", "A/B Testing", "Campaign Reporting"]],
  ["Strategy", ["Consumer Segmentation", "Brand Management", "Proposal Writing", "AI Automation"]],
];

const experiences = [
  {
    date: "Feb 2024 – Present",
    company: "NY Building Systems Consultant Inc.",
    location: "New York, NY",
    role: "Marketing Analytics & Growth Specialist",
    bullets: [
      "Improved website CTR by 5% through A/B testing, SEO, campaign tracking, and WordPress enhancements.",
      "Created RFQs, RFPs, proposals, and presentations contributing to 33% contract acquisition growth and 37% revenue growth.",
      "Managed client accounts for NYC DEP, FirstService Residential, NYPD, and JFK across 30+ concurrent projects.",
      "Used GA4, Tableau, HubSpot, Salesforce, Excel, WordPress, and AI-driven tools for reporting and growth insights.",
    ],
  },
  {
    date: "Sep 2023 – Dec 2023",
    company: "Kasirer",
    location: "New York, NY",
    role: "Marketing & Communications Associate",
    bullets: [
      "Developed LinkedIn and email campaigns highlighting firm accomplishments and employee initiatives.",
      "Built Excel-based KPI reports to track campaign performance.",
      "Drafted communications for press conferences and NYC Council hearings.",
    ],
  },
  {
    date: "Jun 2023 – Aug 2023",
    company: "Newmark",
    location: "New York, NY",
    role: "Digital Marketing Associate",
    bullets: [
      "Built a data-driven Instagram content strategy using competitor analysis and marketing analytics.",
      "Supported commercial real estate research using CoStar, CBRE, and company market databases.",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080909] text-[#f4f4ee]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080909]/90 backdrop-blur">
        <nav className="flex items-center justify-between px-10 py-5 font-mono text-sm uppercase tracking-[0.18em] text-zinc-500">
          <div>ST <span className="text-[#b8ff3d]">·</span> Marketing Analytics</div>

          <div className="hidden gap-10 md:flex">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#tools">Tools</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>

         <a
  href="#contact"
  className="rounded-md bg-[#b8ff3d] px-5 py-3 font-bold text-black transition hover:scale-105"
>
  Get in touch ↗
</a>
        </nav>
      </header>

      <section className="grid-bg min-h-screen px-10 pt-48">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#b8ff3d]">
          Marketing Analytics & Growth Specialist · Brooklyn, NY
        </p>

        <h1 className="mt-8 text-[18vw] font-black leading-[0.78] tracking-[-0.08em] md:text-[8.5rem]">
          Shivani
          <br />
          <span className="serif-italic text-[#b8ff3d]">Thali</span>
        </h1>

        <p className="mt-10 max-w-2xl text-xl leading-8 text-zinc-500">
          Data-driven marketing professional turning analytics, SEO, campaign insights,
          and client strategy into measurable business growth.
        </p>

        <div className="mt-14 grid max-w-3xl grid-cols-3 gap-10">
          <div>
            <p className="serif-italic text-5xl">37<span className="text-[#b8ff3d]">%</span></p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500">Revenue growth</p>
          </div>
          <div>
            <p className="serif-italic text-5xl">33<span className="text-[#b8ff3d]">%</span></p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500">Contract growth</p>
          </div>
          <div>
            <p className="serif-italic text-5xl">30<span className="text-[#b8ff3d]">+</span></p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500">Client projects</p>
          </div>
        </div>
      </section>

      <SectionLabel id="about" label="About" />

      <section className="grid gap-20 px-10 py-20 md:grid-cols-2">
        <h2 className="serif-italic text-5xl leading-tight md:text-6xl">
          Activating marketing systems that <span className="text-[#b8ff3d]">perform</span> and stories that drive decisions
        </h2>

        <div>
          <p className="text-xl leading-9 text-zinc-500">
            I specialize in marketing analytics, customer insights, campaign reporting,
            social media strategy, SEO, proposal development, and AI-enabled workflows.
            My experience spans B2B strategy, public-sector client work, digital growth,
            and cross-functional project coordination.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["GA4 analytics", "SEO", "A/B testing", "Proposal strategy", "Campaign reporting", "Client strategy", "AI automation"].map((item) => (
              <span key={item} className="rounded border border-white/15 px-4 py-2 font-mono text-sm text-zinc-500">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SectionLabel id="experience" label="Experience" />

      <section className="px-10 py-20">
        {experiences.map((job) => (
          <div key={job.role} className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-[260px_1fr]">
            <div className="font-mono text-sm text-zinc-500">
              <p>{job.date}</p>
              <p className="mt-4 font-bold text-[#b8ff3d]">{job.company}</p>
              <p className="mt-2">{job.location}</p>
            </div>

            <div>
              <h3 className="serif-italic text-3xl">{job.role}</h3>
              <ul className="mt-8 space-y-5 text-xl leading-8 text-zinc-500">
                {job.bullets.map((b) => (
                  <li key={b}>— <span className="text-zinc-200">{b}</span></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <SectionLabel id="tools" label="Tools & Platforms" />

      <section className="grid gap-10 px-10 py-20 md:grid-cols-3">
        {tools.map(([group, items]) => (
          <div key={group as string} className="border-l border-white/10 pl-8">
            <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500">{group}</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {(items as string[]).map((item) => (
                <span key={item} className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-sm text-zinc-500">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <SectionLabel id="work" label="Case Studies" />

      <section className="space-y-3 px-10 py-20">
        {[
          ["01", "Internconnect", "Mobile app GTM strategy, user personas, journey maps, business model, and marketing plan."],
          ["02", "Boxed.com", "Market research, Google Analytics review, ROI budget modeling, and campaign recommendations."],
        ].map(([num, title, desc]) => (
          <article key={title} className="grid items-center gap-6 rounded-lg border border-white/10 bg-white/[0.03] p-8 md:grid-cols-[80px_1fr]">
            <p className="font-mono text-zinc-600">{num}</p>
            <div>
              <p className="font-mono text-sm font-bold uppercase tracking-widest text-[#b8ff3d]">Marketing Strategy</p>
              <h3 className="serif-italic mt-2 text-3xl">{title}</h3>
              <p className="mt-3 text-zinc-500">{desc}</p>
            </div>
          </article>
        ))}
      </section>

      <SectionLabel id="contact" label="Contact" />

      <section className="grid gap-16 px-10 py-24 md:grid-cols-2">
        <h2 className="serif-italic text-6xl leading-tight md:text-7xl">
          Let’s build something that <span className="text-[#b8ff3d]">grows.</span>
        </h2>

        <div className="space-y-5">
          <a href="mailto:Shivani.thali@gmail.com">
            <ContactCard label="Email" value="Shivani.thali@gmail.com" />
          </a>

          <a href="https://linkedin.com/in/shivani-thali" target="_blank">
            <ContactCard label="LinkedIn" value="linkedin.com/in/shivani-thali" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-10 py-8 font-mono text-sm text-zinc-600">
        © 2025 Shivani Thali · Brooklyn, NY
      </footer>
    </main>
  );
}

function SectionLabel({ id, label }: { id: string; label: string }) {
  return (
    <div id={id} className="flex items-center gap-6 border-t border-white/10 px-10 pt-8">
      <p className="font-mono text-sm font-bold uppercase tracking-widest text-[#b8ff3d]">{label}</p>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function ContactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#b8ff3d]/60 hover:bg-white/[0.06]">
      <p className="font-mono text-sm uppercase tracking-widest text-zinc-500">{label}</p>
      <p className="mt-3 text-xl">{value}</p>
    </div>
  );
}