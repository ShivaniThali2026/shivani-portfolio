const metrics = [
  { value: "3%", label: "CTR lift", detail: "SEO, A/B testing, and landing page improvements" },
  { value: "33%", label: "Contract growth", detail: "Proposal strategy and bid support" },
  { value: "37%", label: "Revenue growth", detail: "Business development contribution" },
  { value: "30+", label: "Projects managed", detail: "Public and private sector client operations" },
];

const caseStories = [
  {
    number: "01",
    eyebrow: "AEC Proposal Strategy",
    title: "From RFQ to Contract",
    lead:
      "A small engineering consultancy needed to compete against larger firms for public and private sector contracts without a dedicated business development team.",
    story:
      "Shivani built the proposal workflow from research to final submission: identifying opportunities, interpreting RFQ/RFP language, coordinating technical inputs, and shaping clear collateral for decision makers.",
    impact: "33% increase in contract acquisitions, 37% revenue growth, and 3 contracts won over two years.",
    tools: ["InDesign", "Canva", "Microsoft Office", "Agency Research"],
  },
  {
    number: "02",
    eyebrow: "SEO & Digital Growth",
    title: "Turning a Niche Website Into a Growth Channel",
    lead:
      "The company’s website had limited organic visibility and underperforming click-through performance in a competitive NYC B2B market.",
    story:
      "She refined landing pages, supported keyword-led content updates, tested email and page variations, and used GA4 reporting to connect digital improvements with measurable engagement outcomes.",
    impact: "3% CTR lift and 9% growth in organic site engagement.",
    tools: ["SEMrush", "WordPress", "GA4", "Reachmail", "Excel"],
  },
  {
    number: "03",
    eyebrow: "Multi-Channel Campaigns",
    title: "Building a Brand Presence From Zero",
    lead:
      "The firm had no consistent social voice, email rhythm, or polished marketing collateral beyond a basic website.",
    story:
      "Shivani created a LinkedIn and email calendar, developed content pillars, designed capability statements and trade show assets, and supported in-person brand visibility at construction and energy events.",
    impact: "A consistent multi-channel brand system across LinkedIn, email, collateral, and events.",
    tools: ["LinkedIn", "Reachmail", "Mailchimp", "Canva", "InDesign", "GA4"],
  },
  {
    number: "04",
    eyebrow: "Client Strategy & Operations",
    title: "Keeping 30+ Accounts Moving at Once",
    lead:
      "A growing consultancy needed structure across public and private client accounts with overlapping deadlines, invoices, reports, and deliverables.",
    story:
      "She built Excel tracking systems, coordinated between engineers and clients, translated technical updates into client-facing communication, and supported retention through proactive follow-up.",
    impact: "30+ concurrent projects managed with consistent communication and deadline visibility.",
    tools: ["Excel", "Outlook", "Qualtrics", "HubSpot", "Salesforce"],
  },
];

const academicProjects = [
  {
    eyebrow: "UX Strategy · GTM",
    title: "InternConnect",
    description:
      "A student-focused platform concept exploring internship access, user journeys, audience targeting, and go-to-market positioning.",
    tools: ["Figma", "Personas", "Journey Mapping", "GTM Strategy"],
    link: "https://docs.google.com/presentation/d/1kIAiJxq0WnKcqnDMS7j-Cy_snmmy_XV5/edit?usp=sharing",
  },
  {
    eyebrow: "Digital Marketing",
    title: "Fashion Nova Campaign",
    description:
      "A consumer-brand academic project focused on influencer strategy, digital behavior, audience segmentation, and social campaign direction.",
    tools: ["Social Strategy", "Influencer Marketing", "Consumer Insights"],
    link: "https://docs.google.com/presentation/d/1JdwyFX1hwFJwBFcWMw04VG1_H-WKtE4mZ16Ln2nTxMo/edit?usp=sharing",
  },
  {
    eyebrow: "Marketing Analytics",
    title: "Boxed.com Strategy",
    description:
      "A strategy project using research, Google Analytics thinking, ROI budgeting, and campaign recommendations to identify growth opportunities.",
    tools: ["Excel", "Google Analytics", "Market Research", "ROI Modeling"],
    link: "",
  },
];

const photoMoments = [
  { title: "Macro Detail", caption: "Daisy macro study", image: "/shivani-portfolio/photography/photo-01.png", featured: true },
  { title: "Frames", caption: "Architectural framing", image: "/shivani-portfolio/photography/photo-05.png" },
  { title: "Foliage", caption: "Black and white nature study", image: "/shivani-portfolio/photography/photo-09.png" },
  { title: "Light & Motion", caption: "Fire composition", image: "/shivani-portfolio/photography/photo-02.png" },
  { title: "City Night", caption: "Candid city moment", image: "/shivani-portfolio/photography/photo-06.png" },
  { title: "Documentary", caption: "Sheep transport moment", image: "/shivani-portfolio/photography/photo-10.png" },
  { title: "Place", caption: "Rainbow and architecture", image: "/shivani-portfolio/photography/photo-03.png" },
  { title: "Night Scene", caption: "Moon reflection", image: "/shivani-portfolio/photography/photo-04.png" },
  { title: "Texture", caption: "Shell and hand detail", image: "/shivani-portfolio/photography/photo-08.png" },
  { title: "Landscape", caption: "Valley sunset silhouette", image: "/shivani-portfolio/photography/photo-11.png" },
  { title: "Natural Frame", caption: "Boat through circular frame", image: "/shivani-portfolio/photography/photo-12.png" },
  { title: "Candid", caption: "Cat close-up", image: "/shivani-portfolio/photography/photo-07.png" },
];

const tools = [
  ["Analytics & CRM", ["GA4", "Tableau", "HubSpot", "Salesforce", "Excel", "Qualtrics"]],
  ["Growth Marketing", ["SEO", "SEMrush", "Reachmail", "Mailchimp", "WordPress", "A/B Testing"]],
  ["Creative Production", ["InDesign", "Canva", "Photoshop", "Sony Vegas Pro", "DSLR Photography"]],
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="top-nav">
        <a className="brand" href="#home">Shivani</a>
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#creative">Creative</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <nav className="floating-nav" aria-label="section navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#creative">Creative</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home" className="home-section section">
        <div className="home-social">
          <a href="https://linkedin.com/in/shivani-thali" target="_blank">LinkedIn</a>
          <a href="mailto:Shivani.thali@gmail.com">Email</a>
        </div>

        <div className="home-content">
          <p className="section-kicker">Marketing Strategy · Growth · Creative Storytelling</p>
          <h1>Hi, I’m Shivani Thali</h1>
          <h2>Marketing strategist building growth-focused digital stories.</h2>
          <p>
            I connect research, campaigns, proposals, content, and visual storytelling into practical
            growth systems for B2B, public-sector, and creative marketing work.
          </p>
          <a href="#contact" className="primary-button">Contact Me</a>
        </div>

        <div className="home-visual">
  <div className="profile-image-wrapper">
    <img
      src="/shivani-portfolio/profile/profile.png"
      alt="Shivani Thali"
      className="profile-image"
    />
  </div>
</div>
      </section>

      <section className="metric-row">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.detail}</p>
          </article>
        ))}
      </section>

      <SectionTitle id="about" title="About Me" subtitle="My introduction" />

      <section className="about-grid section-narrow">
        <div className="about-card about-image-card">
          <span>Strategy</span>
          <strong>Research + Campaigns + Creative Direction</strong>
        </div>

        <div className="about-text">
          <p>
            Shivani’s work sits at the intersection of growth marketing, market research, SEO,
            proposal strategy, campaign reporting, and creative content development.
          </p>
          <p>
            Her portfolio combines professional marketing systems, academic strategy projects,
            and creative media work to show both analytical thinking and storytelling range.
          </p>

          <div className="about-stats">
            <div><strong>3%</strong><span>CTR Lift</span></div>
            <div><strong>33%</strong><span>Contract Growth</span></div>
            <div><strong>30+</strong><span>Projects Managed</span></div>
          </div>
        </div>
      </section>

      <SectionTitle id="work" title="Case Studies" subtitle="Professional work" />

      <section className="work-grid section-narrow">
        {caseStories.map((item) => (
          <article className="work-card" key={item.number}>
            <span className="work-number">{item.number}</span>
            <p className="section-kicker">{item.eyebrow}</p>
            <h3>{item.title}</h3>
            <p>{item.lead}</p>
            <div className="work-detail">{item.impact}</div>
            <TagList items={item.tools} />
          </article>
        ))}
      </section>

      <SectionTitle id="projects" title="Academic Projects" subtitle="Strategy explorations" />

      <section className="projects-slider section-narrow">
        {academicProjects.map((project) => (
          <article className="project-slide" key={project.title}>
            <p className="section-kicker">{project.eyebrow}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <TagList items={project.tools} />
            {project.link && (
              <a href={project.link} target="_blank" className="text-link">
                View Project →
              </a>
            )}
          </article>
        ))}
      </section>

      <SectionTitle id="creative" title="Creative Lens" subtitle="Photography and video editing" />

      <section className="creative-layout section-narrow">
        <div className="creative-info">
          <p className="section-kicker">DSLR · Mobile Photography · Sony Vegas Pro</p>
          <h3>Visual storytelling that supports the strategy.</h3>
          <p>
            A compact visual system combining DSLR/mobile photography and Sony Vegas Pro editing
            to show creative direction, composition, pacing, and visual storytelling range.
          </p>
          <a
            href="https://drive.google.com/file/d/146FGRchDGbR5a0kCjD2SeaEDhBuc69rM/view?usp=drive_link"
            target="_blank"
            className="primary-button"
          >
            Watch Video Edit
          </a>
        </div>

        <div className="photo-stack">
          {photoMoments.map((photo) => (
            <figure className={photo.featured ? "photo-item photo-featured" : "photo-item"} key={photo.title}>
              <img src={photo.image} alt={photo.caption} />
              <figcaption>{photo.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <SectionTitle id="skills" title="Tools & Skills" subtitle="Platforms and production" />

      <section className="skills-grid section-narrow">
        {tools.map(([group, items]) => (
          <article className="skill-card" key={group as string}>
            <h3>{group}</h3>
            <TagList items={items as string[]} />
          </article>
        ))}
      </section>

      <section id="contact" className="contact-section section-narrow">
        <div>
          <p className="section-kicker">Contact Me</p>
          <h2>Have a project or role in mind?</h2>
          <p>Let’s connect around marketing strategy, growth, campaigns, or creative storytelling.</p>
        </div>

        <div className="contact-links">
          <a href="mailto:Shivani.thali@gmail.com">
            <span>Email</span>
            <strong>Shivani.thali@gmail.com</strong>
          </a>
          <a href="https://linkedin.com/in/shivani-thali" target="_blank">
            <span>LinkedIn</span>
            <strong>linkedin.com/in/shivani-thali</strong>
          </a>
        </div>
      </section>

      <footer>© 2025 Shivani Thali · Marketing Strategy Portfolio</footer>
    </main>
  );
}

function SectionTitle({ id, title, subtitle }: { id: string; title: string; subtitle: string }) {
  return (
    <div id={id} className="section-title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}
