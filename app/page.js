import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  Cable,
  CheckCircle2,
  Code2,
  Cloud,
  Database,
  Blocks,
  Globe2,
  Headphones,
  Infinity as InfinityIcon,
  MessageSquare,
  Mail,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Monitor,
  Server,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";

export const metadata = {
  alternates: { canonical: "https://www.corebridgelabs.org/" },
};

const projects = [
  {
    title: "AI Knowledge Platform",
    description:
      "Enterprise RAG platform for searching and reasoning across large document collections.",
    image: "/images/project-ai.png",
    tags: ["Python", "FastAPI", "React", "LLM", "Vector DB"],
  },
  {
    title: "Blockchain Trading Infrastructure",
    description:
      "Real-time Solana transaction monitoring and execution infrastructure.",
    image: "/images/project-trading.png",
    tags: ["Rust", "Solana", "gRPC", "WebSocket"],
  },
  {
    title: "Distributed Backend Platform",
    description:
      "Cloud-native event-driven backend for high-throughput workloads.",
    image: "/images/project-backend.png",
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
  },
];
const services = [
  {
    title: "Full-Stack Development",
    description:
      "Modern, responsive web applications and SaaS platforms from idea to production.",
    tags: ["React", "Next.js", "TypeScript"],
    Icon: Monitor,
  },
  {
    title: "Backend Engineering",
    description:
      "Scalable APIs, microservices and distributed systems built for growth.",
    tags: ["Python", "Java", "Go", "Node.js"],
    Icon: Server,
  },
  {
    title: "Blockchain & Web3",
    description:
      "Decentralized applications, smart contracts and on-chain integrations.",
    tags: ["Solana", "Ethereum", "Rust"],
    Icon: Blocks,
  },
  {
    title: "AI & LLM Engineering",
    description: "LLM applications, RAG, AI agents and intelligent automation.",
    tags: ["OpenAI", "LangChain", "Vector DB"],
    Icon: BrainCircuit,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Scalable and secure cloud infrastructure across AWS, Azure and GCP.",
    tags: ["AWS", "Azure", "GCP"],
    Icon: Cloud,
  },
  {
    title: "DevOps & Platform Engineering",
    description: "CI/CD, automation, monitoring and reliable deployments.",
    tags: ["Docker", "Kubernetes", "Terraform"],
    Icon: Settings,
  },
  {
    title: "Data Engineering",
    description: "Data pipelines, real-time streaming and analytics platforms.",
    tags: ["Kafka", "Spark", "Airflow"],
    Icon: Database,
  },
  {
    title: "API & Systems Integration",
    description:
      "Third-party integrations, payment systems and event-driven architectures.",
    tags: ["REST", "GraphQL", "APIs"],
    Icon: Cable,
  },
];
const steps = [
  ["01", "Discover", "Understand your goals and requirements.", Search],
  ["02", "Plan", "Define solution architecture and roadmap.", CheckCircle2],
  ["03", "Build", "Develop in focused, short iterations.", Code2],
  ["04", "Test", "Ensure quality, performance and security.", ShieldCheck],
  ["05", "Launch", "Deploy to production and monitor.", Rocket],
  [
    "06",
    "Support",
    "Ongoing improvements and long-term partnership.",
    Headphones,
  ],
];
const benefits = [
  ["Senior talent", "with real experience", Users],
  ["Direct and clear", "communication", MessageSquare],
  ["Production-first", "mindset", ShieldCheck],
  ["Long-term", "partnership", InfinityIcon],
];

export default function HomePage() {
  return (
    <main id="top">
      <header className="siteHeader">
        <div className="contactStrip">
          <div className="container contactStripInner">
            <a
              className="contactStripItem contactEmail"
              href="mailto:admin@corebridgelabs.org"
            >
              <Mail size={21} aria-hidden="true" />
              <span>admin@corebridgelabs.org</span>
            </a>
            <div className="contactStripDetails">
              <a className="contactStripItem" href="tel:+13232875868">
                <Phone size={21} aria-hidden="true" />
                <span>+1 (323) 287-5868</span>
              </a>
              <span className="remoteNote">Global · Remote-first</span>
            </div>
          </div>
        </div>
        <div className="container headerInner">
          <Logo />
          <nav className="desktopNav">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="primaryButton headerButton" href="#contact">
            Start a Project <ArrowRight size={16} />
          </a>
        </div>
      </header>
      <section className="hero sectionBorder">
        <Image
          className="heroImage"
          src="/images/hero-earth.png"
          alt="Earth at night with global network connections"
          fill
          priority
          sizes="100vw"
        />
        <div className="heroShade" />
        <div className="container heroContent">
          <div className="heroCopy">
            <p className="eyebrow">SOFTWARE ENGINEERING STUDIO</p>
            <h1>
              Engineering software
              <br />
              that <span>moves the world</span>
              <br />
              <span>forward.</span>
            </h1>
            <p className="heroText">
              Corebridge Labs is a remote-first software engineering studio. We
              design and build production-ready AI, blockchain, backend and
              full-stack solutions for startups and growing companies.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#contact">
                Start a Project <ArrowRight size={16} />
              </a>
              <a className="secondaryButton" href="#work">
                View Our Work
              </a>
            </div>
            <div className="heroProof">
              <span>
                <Zap size={17} /> Fast response
              </span>
              <span>
                <Users size={17} /> Senior engineers
              </span>
              <span>
                <Globe2 size={17} /> Global remote team
              </span>
            </div>
          </div>
          <div className="heroMotto">
            <span>IDEAS</span>
            <span>TECHNOLOGY</span>
            <span>REAL IMPACT</span>
            <i />
          </div>
        </div>
      </section>
      <section className="servicesSection sectionBorder" id="services">
        <div className="container">
          <div className="sectionHeadingRow servicesHeading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Our Services</h2>
              <p className="servicesIntro">
                End-to-end engineering services to help you build, scale, and
                innovate.
              </p>
            </div>
            <a className="primaryButton" href="#contact">
              Discuss a Service <ArrowRight size={16} />
            </a>
          </div>
          <div className="serviceGrid">
            {services.map(({ title, description, tags, Icon }) => (
              <article className="serviceCard" key={title}>
                <div className="serviceCardHeading">
                  <span className="serviceIcon">
                    <Icon size={31} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <div className="serviceTags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="workSection sectionBorder" id="work">
        <div className="container">
          <div className="sectionHeadingRow">
            <div>
              <p className="eyebrow">FEATURED WORK</p>
              <h2>A selection of projects we’ve built for our clients.</h2>
            </div>
          </div>
          <div className="projectGrid">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <div className="projectVisual">
                  <Image
                    src={project.image}
                    alt={`${project.title} interface`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="projectBody">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tagList">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="processSection sectionBorder" id="process">
        <div className="container">
          <div className="sectionHeadingRow processHeading">
            <div>
              <p className="eyebrow">HOW WE WORK</p>
              <h2>A simple, transparent process.</h2>
            </div>
            <p>
              We keep things clear and focused, from the first conversation to
              long-term support.
            </p>
          </div>
          <div className="processGrid">
            {steps.map(([number, title, text, Icon], index) => (
              <div className="processStep" key={number}>
                <div className="processTop">
                  <span className="stepNumber">{number}</span>
                  <Icon size={28} />
                  {index < steps.length - 1 ? (
                    <ArrowRight className="stepArrow" size={18} />
                  ) : null}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="aboutSection sectionBorder" id="about">
        <Image
          className="aboutImage"
          src="/images/mountain-teamwork.png"
          alt="Two climbers helping each other on a mountain"
          fill
          sizes="100vw"
        />
        <div className="aboutShade" />
        <div className="container aboutContent">
          <div className="aboutTop">
            <div>
              <p className="eyebrow">WHY CHOOSE COREBRIDGE LABS</p>
              <h2>More than just development.</h2>
              <p>
                We care about your product, your users and your long-term
                success.
              </p>
            </div>
            <blockquote>
              “Great technology
              <br />
              builds a better future.”
            </blockquote>
          </div>
          <div className="benefitGrid">
            {benefits.map(([title, text, Icon]) => (
              <div className="benefit" key={title}>
                <span>
                  <Icon size={24} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              </div>
            ))}
          </div>
          <div className="stats">
            <div>
              <strong>50+</strong>
              <span>Projects Delivered</span>
            </div>
            <div>
              <strong>30+</strong>
              <span>Happy Clients</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Remote Friendly</span>
            </div>
          </div>
          <div className="contactPanel" id="contact">
            <div className="contactIntro">
              <p className="eyebrow">LET’S BUILD TOGETHER</p>
              <h2>Start your project today.</h2>
              <p>Tell us what you want to build and we’ll get back to you.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <footer>
        <div className="container footerInner">
          <Logo />
          <span>© 2026 Corebridge Labs. All rights reserved.</span>
          <a href="https://www.linkedin.com/company/corebridge-labs/">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
