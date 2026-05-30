const metrics = [
  { value: "3%", label: "CTR lift through SEO, A/B testing & landing page optimization" },
  { value: "33%", label: "Increase in contract acquisitions" },
  { value: "37%", label: "Revenue growth contribution" },
  { value: "30+", label: "Concurrent client projects managed" },
];

const caseStudies = [
  {
    number: "01",
    category: "AEC Proposal Strategy",
    title: "From RFQ to Contract",
    description:
      "Built an end-to-end proposal strategy for a B2B engineering consultancy competing against larger firms for public and private sector contracts.",
    approach:
      "Researched agencies, studied RFQ/RFP language, coordinated engineering inputs, and designed proposal collateral in InDesign and Canva.",
    result: "33% increase in contract acquisitions, 37% revenue growth, and 3 contracts won over two years.",
    tools: ["InDesign", "Canva", "Microsoft Office", "Agency Research"],
  },
  {
    number: "02",
    category: "SEO & Digital Growth",
    title: "SEO-Led Website Growth",
    description:
      "Improved organic visibility and website performance for a niche B2B engineering consultancy in a competitive NYC market.",
    approach:
      "Conducted keyword research, optimized WordPress pages, ran A/B tests on landing pages and email campaigns, and tracked performance in GA4.",
    result: "3% CTR lift and 9% growth in organic site engagement.",
    tools: ["SEMrush", "WordPress", "GA4", "Reachmail", "Excel"],
  },
  {
    number: "03",
    category: "Multi-Channel Campaigns",
    title: "B2B Brand Growth Strategy",
    description:
      "Built a structured marketing presence from the ground up across LinkedIn, email, events, and branded collateral.",
    approach:
      "Created content calendars, designed capability statements and brochures, supported expo lead generation, and reported performance to leadership.",
    result: "Established a consistent multi-channel brand presence from a zero baseline.",
    tools: ["LinkedIn", "Reachmail", "Mailchimp", "Canva", "InDesign", "GA4"],
  },
  {
    number: "04",
    category: "Client Strategy & Operations",
    title: "30+ Public & Private Sector Accounts",
    description:
      "Managed communications, reporting, invoicing, and deliverable tracking across a growing portfolio of public and private sector clients.",
    approach:
      "Built Excel tracking systems, coordinated with engineering teams, translated technical updates for clients, and supported stakeholder communication.",
    result: "30+ concurrent projects managed with consistent follow-up and no missed deadlines.",
    tools: ["Excel", "Outlook", "Qualtrics", "HubSpot", "Salesforce"],
  },
];

const academicProjects = [
  {
    type: "UX Strategy · GTM",
    title: "InternConnect",
    description:
      "Designed user personas, mapped customer journeys, and developed a go-to-market strategy for a student-focused internship access platform.",
    tools: ["Figma", "User Personas", "Journey Mapping", "GTM Strategy"],
    link: "https://docs.google.com/presentation/d/1kIAiJxq0WnKcqnDMS7j-Cy_snmmy_XV5/edit?usp=sharing",
  },
  {
    type: "Digital Marketing",
    title: "Fashion Nova Campaign",
    description:
      "Academic digital marketing project analyzing consumer behavior, influencer strategy, campaign positioning, and social media growth opportunities.",
    tools: ["Social Media Strategy", "Audience Segmentation", "Influencer Marketing"],
    link: "https://docs.google.com/presentation/d/1JdwyFX1hwFJwBFcWMw04VG1_H-WKtE4mZ16Ln2nTxMo/edit?usp=sharing",
  },
  {
    type: "Marketing Analytics",
    title: "Boxed.com Strategy",
    description:
      "Conducted market research, audience analysis, ROI-focused budgeting, and performance recommendations using Excel and Google Analytics.",
    tools: ["Excel", "Google Analytics", "Market Research", "ROI Modeling"],
    link: "",
  },
];

const creativeWork = [
  {
    title: "Sony Vegas Pro Video Edit",
    description:
      "Video editing work focused on pacing, transitions, storytelling, rhythm, and visual composition.",
    tools: ["Sony Vegas Pro", "Video Editing", "Visual Storytelling"],
    link: "https://drive.google.com/file/d/146FGRchDGbR5a0kCjD2SeaEDhBuc69rM/view?usp=drive_link",
  },
];

const photography = [
  "Macro Nature",
  "Travel Photography",
  "Architecture Framing",
  "Night Photography",
  "Documentary Moments",
  "Visual Storytelling",
];

const toolGroups = [
  ["Analytics & CRM", ["GA4", "Tableau", "HubSpot", "Salesforce", "Excel", "Qualtrics"]],
  ["Marketing & Growth", ["SEO", "SEMrush", "Reachmail", "Mailchimp", "WordPress", "A/B Testing"]],
  ["Creative Tools", ["InDesign", "Canva", "Photoshop", "Sony Vegas Pro", "DSLR Photography"]],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="nav">
        <a href="#" className="brand">
          ST <span>·</span> Marketing Strategy
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#academic">Academic</a>
          <a href="#creative">Creative</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Get in touch ↗
        </a>
      </header>

      <section className="hero grid-bg">
        <p className="eyebrow">Marketing Strategy · Brand Growth · Digital Campaigns</p>

        <h1>
          Building marketing systems
          <br />
          that <span>perform.</span>
        </h1>

        <p className="hero-copy">
          Shivani Thali is a marketing and digital strategy professional blending analytics,
          campaign execution, proposal strategy, visual storytelling, and creative communication
          across B2B, public-sector, and academic projects.
        </p>

        <div className="metrics">
          {metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionHeader id="about" label="About" />

      <section className="split-section">
        <h2>
          A creative marketing strategist with an analytical foundation and a strong eye for
          <span> storytelling.</span>
        </h2>

        <div className="section-copy">
          <p>
            I specialize in growth marketing, market research, SEO, campaign analytics, proposal
            strategy, client communications, and creative content development. My work connects
            business goals with measurable marketing systems and visual storytelling.
          </p>

          <p>
            Across professional and academic work, I’ve built proposal workflows, supported B2B
            marketing campaigns, optimized website performance, managed public-sector client
            communications, and developed creative media projects.
          </p>
        </div>
      </section>

      <SectionHeader id="case-studies" label="Professional Case Studies" />

      <section className="case-list">
        {caseStudies.map((study) => (
          <article className="case-card" key={study.number}>
            <div className="case-number">{study.number}</div>

            <div className="case-content">
              <p className="case-category">{study.category}</p>
              <h3>{study.title}</h3>
              <p>{study.description}</p>

              <div className="mini-block">
                <span>Approach</span>
                <p>{study.approach}</p>
              </div>

              <div className="mini-block">
                <span>Result</span>
                <p>{study.result}</p>
              </div>

              <div className="tags">
                {study.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <SectionHeader id="academic" label="Academic Projects" />

      <section className="project-grid">
        {academicProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>

            {project.link && (
              <a href={project.link} target="_blank" className="text-link">
                View Project →
              </a>
            )}
          </article>
        ))}
      </section>

      <SectionHeader id="creative" label="Creative Work" />

      <section className="creative-section">
        {creativeWork.map((item) => (
          <article className="creative-card" key={item.title}>
            <div>
              <p className="project-type">Video Editing</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="tags">
                {item.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <a href={item.link} target="_blank" className="creative-button">
                Watch Edit →
              </a>
            </div>

            <div className="video-preview">
              <span>SONY VEGAS PRO</span>
              <strong>Video Edit</strong>
            </div>
          </article>
        ))}
      </section>

      <SectionHeader id="photography" label="Visual Storytelling & Photography" />

      <section className="photo-section">
        <div className="photo-intro">
          <h2>
            Photography work focused on composition, mood, travel, nature, and everyday visual
            storytelling.
          </h2>
          <p>
            This section highlights Shivani’s creative eye across DSLR and mobile photography,
            strengthening the portfolio beyond analytics and strategy.
          </p>
        </div>

        <div className="photo-grid">
          {photography.map((item) => (
            <div className="photo-card" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionHeader id="tools" label="Tools & Platforms" />

      <section className="tools-grid">
        {toolGroups.map(([group, items]) => (
          <div className="tool-column" key={group as string}>
            <h3>{group}</h3>
            <div className="tags">
              {(items as string[]).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <SectionHeader id="contact" label="Contact" />

      <section className="contact-section">
        <h2>
          Let’s build something that <span>grows.</span>
        </h2>

        <div className="contact-cards">
          <a href="mailto:Shivani.thali@gmail.com" className="contact-card">
            <small>Email</small>
            <strong>Shivani.thali@gmail.com</strong>
          </a>

          <a href="https://linkedin.com/in/shivani-thali" target="_blank" className="contact-card">
            <small>LinkedIn</small>
            <strong>linkedin.com/in/shivani-thali</strong>
          </a>
        </div>
      </section>

      <footer>
        © 2025 Shivani Thali · Marketing Strategy · Growth · Creative Storytelling
      </footer>
    </main>
  );
}

function SectionHeader({ id, label }: { id: string; label: string }) {
  return (
    <div id={id} className="section-header">
      <span>{label}</span>
      <div />
    </div>
  );
}