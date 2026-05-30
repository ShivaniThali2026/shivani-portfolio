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
    <main className="site-shell">
      <header className="nav">
        <a href="#top" className="brand">ST <span>·</span> Marketing Strategy</a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#case-studies">Work</a>
          <a href="#academic">Projects</a>
          <a href="#creative-lens">Creative Lens</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">Get in touch ↗</a>
      </header>

      <section id="top" className="hero grid-bg">
        <p className="eyebrow">Marketing Strategy · Brand Growth · Digital Campaigns</p>
        <h1>Strategy, analytics<br />and creative stories<br /><span>built to grow.</span></h1>
        <p className="hero-copy">
          Shivani Thali is a marketing and digital strategy professional connecting research,
          campaigns, proposals, content, and visual storytelling into practical growth systems.
        </p>

        <div className="metrics">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <SectionHeader id="about" label="About" />
      <section className="about-section">
        <h2>A marketing strategist with a research mindset and a visual communication background.</h2>
        <div className="about-copy">
          <p>
            Shivani’s work sits at the intersection of growth marketing, market research, SEO,
            proposal strategy, campaign reporting, and creative content development.
          </p>
          <p>
            Her portfolio combines professional marketing systems, academic strategy projects,
            and creative media work to show both analytical thinking and storytelling range.
          </p>
        </div>
      </section>

      <SectionHeader id="case-studies" label="Professional Case Studies" />
      <section className="story-list">
        {caseStories.map((item) => (
          <article className="story-card" key={item.number}>
            <div className="story-index">{item.number}</div>
            <div className="story-main">
              <p className="eyebrow small">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p className="story-lead">{item.lead}</p>
              <p className="story-body">{item.story}</p>
              <div className="impact-box">{item.impact}</div>
              <TagList items={item.tools} />
            </div>
          </article>
        ))}
      </section>

      <SectionHeader id="academic" label="Academic & Strategy Projects" />
      <section className="project-grid">
        {academicProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="eyebrow small">{project.eyebrow}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <TagList items={project.tools} />
            {project.link && (
              <a href={project.link} target="_blank" className="text-link">
                View project ↗
              </a>
            )}
          </article>
        ))}
      </section>

      <SectionHeader id="creative-lens" label="Creative Lens" />
      <section className="creative-lens-section">
        <div className="creative-lens-copy">
          <p className="eyebrow small">DSLR · Mobile Photography · Video Editing</p>
          <h2>Through the lens</h2>
          <p>
            A compact visual section combining photography and Sony Vegas Pro editing to show
            Shivani’s creative direction, composition, pacing, and visual storytelling range.
          </p>

          <a
            href="https://drive.google.com/file/d/146FGRchDGbR5a0kCjD2SeaEDhBuc69rM/view?usp=drive_link"
            target="_blank"
            className="creative-button"
          >
            Watch Sony Vegas Pro edit ↗
          </a>

          <div className="video-note">
            <span>Video Editing</span>
            <p>Sony Vegas Pro · visual rhythm · transitions · cinematic pacing</p>
          </div>
        </div>

        <div className="compact-photo-grid">
          {photoMoments.map((photo) => (
            <figure className={photo.featured ? "compact-photo featured-photo" : "compact-photo"} key={photo.title}>
              <img src={photo.image} alt={photo.caption} />
              <figcaption>
                <span>{photo.title}</span>
                <p>{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <SectionHeader id="tools" label="Tools & Platforms" />
      <section className="tools-grid">
        {tools.map(([group, items]) => (
          <article className="tool-column" key={group as string}>
            <h3>{group}</h3>
            <TagList items={items as string[]} />
          </article>
        ))}
      </section>

      <SectionHeader id="contact" label="Contact" />
      <section className="contact-section">
        <h2>Let’s build something that <span>grows.</span></h2>
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

      <footer>© 2025 Shivani Thali · Marketing Strategy · Growth · Creative Storytelling</footer>
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

function TagList({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}
