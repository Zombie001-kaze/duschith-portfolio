import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Password Security Toolkit",
    type: "CYBERSECURITY TOOL",
    status: "ACTIVE",
    featured: true,
    description:
      "A Python-based password analysis toolkit that evaluates passwords using measurable security characteristics.",
    problem:
      "I built this to make password security measurable instead of reducing it to a simple strong or weak label.",
    contribution:
      "I developed the Python analysis logic for scoring, entropy estimation, length analysis, character-set detection, strength classification, and risk assessment.",
    technical:
      "The analyzer reports score, strength, risk level, entropy, password length, and individual character-set usage such as uppercase, lowercase, numbers, and special characters.",
    stack: ["PYTHON", "ENTROPY", "SECURITY", "CLI"],
    github:
      "https://github.com/Zombie001-kaze/Password-Security-Toolkit",
  },
  {
    number: "02",
    name: "CyberShield-FIM",
    type: "FILE INTEGRITY MONITOR",
    status: "ACTIVE",
    description:
      "A Python-based security tool designed to detect unexpected modifications to protected files.",
    problem:
      "Important files can change without an obvious warning. I built this project to explore how file integrity monitoring can detect unauthorized modifications.",
    contribution:
      "I developed the Python monitoring logic for protected files and the process used to compare a trusted file state against later states.",
    technical:
      "The project uses a baseline-comparison approach: a trusted state is established first, then subsequent checks can identify changes to protected files.",
    stack: ["PYTHON", "FIM", "MONITORING", "SECURITY"],
    github:
      "https://github.com/Zombie001-kaze/CyberShield-FIM",
  },
];

const skills = [
  "Python",
  "Cybersecurity",
  "Linux",
  "Git & GitHub",
  "Security Tooling",
  "File Integrity Monitoring",
  "Password Security",
  "JavaScript",
  "React",
  "SQL",
];

function App() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([
    "SECURITY LAB // OPTIONAL TERMINAL",
    "System initialized.",
    "Type 'help' to explore.",
  ]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const runCommand = (event) => {
    event.preventDefault();

    const command = terminalInput.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setTerminalOutput([]);
      setTerminalInput("");
      return;
    }

    const commands = {
      help: "AVAILABLE: about | projects | skills | security | contact | clear",

      about:
        "K R Duschith — BCA Data Science student focused on cybersecurity, security tooling and software development.",

      projects:
        "01 Password Security Toolkit | 02 CyberShield-FIM",

      skills: skills.join(" • "),

      security:
        "STATUS: OPERATIONAL | FOCUS: DEFENSIVE SECURITY | SIMULATION: LOW",

      contact: "EMAIL: duschith578@gmail.com",
    };

    const response =
      commands[command] ||
      `Command not found: ${command}. Type 'help'.`;

    setTerminalOutput((previous) => [
      ...previous,
      `$ ${command}`,
      response,
    ]);

    setTerminalInput("");
  };

  return (
    <div className="app">
      <div className="background-grid" />

      {/* NAVBAR */}
      <header className="navbar">
        <button
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          KR<span>_</span>DUSCHITH
        </button>

        <nav>
          <button onClick={() => scrollToSection("about")}>
            ABOUT
          </button>

          <button onClick={() => scrollToSection("projects")}>
            PROJECTS
          </button>

          <button onClick={() => scrollToSection("skills")}>
            SKILLS
          </button>

          <button onClick={() => scrollToSection("security")}>
            LAB
          </button>

          <button onClick={() => scrollToSection("contact")}>
            CONTACT
          </button>
        </nav>

        <div className="system-status">
          <span />
          AVAILABLE
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="section hero">
          <div className="hero-left reveal">
            <div className="eyebrow">
              <span className="green-dot" />
              BCA DATA SCIENCE · CYBERSECURITY
            </div>

            <div className="hero-status">
              <span>●</span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1>
              K R
              <br />
              <strong>DUSCHITH</strong>
            </h1>

            <p className="hero-role">
              CYBERSECURITY
              <span>/</span>
              PYTHON
              <span>/</span>
              SOFTWARE DEVELOPMENT
            </p>

            <p className="hero-description">
              I build practical security tools and software
              while developing deeper expertise in
              cybersecurity, Linux, automation, and modern
              web development.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                VIEW MY WORK
                <span>↘</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("contact")}
              >
                CONTACT ME
              </button>
            </div>

            <div className="hero-meta">
              <div>
                <small>FOCUS</small>
                <strong>CYBERSECURITY</strong>
              </div>

              <div>
                <small>PRIMARY LANGUAGE</small>
                <strong>PYTHON</strong>
              </div>

              <div>
                <small>PROJECTS</small>
                <strong>02</strong>
              </div>

              <div>
                <small>STATUS</small>
                <strong className="green-text">BUILDING</strong>
              </div>
            </div>
          </div>

          {/* FEATURED PROJECT */}
          <div className="hero-featured reveal">
            <div className="featured-top">
              <span>FEATURED PROJECT</span>
              <span>01</span>
            </div>

            <div className="featured-status">
              <span />
              ACTIVE PROJECT
            </div>

            <h2>
              Password
              <br />
              <strong>Security Toolkit</strong>
            </h2>

            <p>
              A Python-based security analysis tool that
              evaluates password strength through entropy,
              length, character-set analysis, scoring, and
              risk classification.
            </p>

            <div className="featured-tech">
              <span>PYTHON</span>
              <span>ENTROPY</span>
              <span>SECURITY</span>
              <span>CLI</span>
            </div>

            <div className="featured-detail">
              <span>TECHNICAL FOCUS</span>

              <p>
                Converts password characteristics into
                measurable security information instead of
                relying on a simple strong/weak result.
              </p>
            </div>

            <div className="featured-actions">
              <a
                href={projects[0].github}
                target="_blank"
                rel="noreferrer"
                className="project-link-button"
              >
                VIEW GITHUB ↗
              </a>

              <button
                className="featured-scroll"
                onClick={() => scrollToSection("projects")}
              >
                ALL PROJECTS ↓
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section content-section">
          <div className="section-heading reveal">
            <span>01</span>
            <h2>ABOUT</h2>
          </div>

          <div className="about-grid">
            <div className="panel about-main reveal">
              <div className="panel-label">PROFILE</div>

              <h3>
                Building technical depth through real
                projects.
              </h3>

              <p>
                I'm K R Duschith, a BCA Data Science student
                developing practical skills across
                cybersecurity and software development.
              </p>

              <p>
                My current focus is cybersecurity:
                understanding how systems work, building
                security tools, working with Linux, and
                developing projects that demonstrate actual
                technical understanding.
              </p>
            </div>

            <div className="about-side reveal">
              <div className="stat-card">
                <span>01 / FIELD</span>
                <strong>CYBERSECURITY</strong>
              </div>

              <div className="stat-card">
                <span>02 / DEVELOPMENT</span>
                <strong>PYTHON · REACT</strong>
              </div>

              <div className="stat-card">
                <span>03 / APPROACH</span>
                <strong>BUILD · TEST · LEARN</strong>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="section content-section"
        >
          <div className="section-heading reveal">
            <span>02</span>
            <h2>PROJECTS</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`project-card ${
                  project.featured ? "featured-project" : ""
                } reveal`}
              >
                <div className="project-top">
                  <span>{project.number}</span>

                  <span className="project-status">
                    ● {project.status}
                  </span>
                </div>

                <div className="project-type">
                  {project.type}
                </div>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-detail">
                  <span>THE PROBLEM</span>
                  <p>{project.problem}</p>
                </div>

                <div className="project-detail">
                  <span>MY CONTRIBUTION</span>
                  <p>{project.contribution}</p>
                </div>

                <div className="project-detail">
                  <span>TECHNICAL IMPLEMENTATION</span>
                  <p>{project.technical}</p>
                </div>

                <div className="tech-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-button"
                  >
                    VIEW GITHUB ↗
                  </a>

                  <span className="project-unavailable">
                    LIVE DEMO — N/A
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section content-section">
          <div className="section-heading reveal">
            <span>03</span>
            <h2>SKILLS</h2>
          </div>

          <div className="skills-layout">
            <div className="panel skills-intro reveal">
              <div className="panel-label">
                TECHNICAL STACK
              </div>

              <h3>
                Tools I use to build and understand systems.
              </h3>

              <p>
                My strongest area is Python-based security
                tooling. I'm expanding that foundation
                through Linux, web development, Git, SQL,
                and hands-on cybersecurity projects.
              </p>
            </div>

            <div className="skills-list reveal">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{skill}</strong>

                  <b>↗</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY LAB */}
        <section
          id="security"
          className="section content-section"
        >
          <div className="section-heading reveal">
            <span>04</span>
            <h2>SECURITY LAB</h2>
          </div>

          <div className="security-intro reveal">
            <span>OPTIONAL INTERACTIVE EASTER EGG</span>

            <p>
              Everything in this portfolio is accessible
              without using the terminal. This is simply
              here for visitors who want to explore.
            </p>
          </div>

          <div className="security-layout">
            <div className="interactive-terminal reveal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <i />
                  <i />
                  <i />
                </div>

                SECURITY-LAB
                <span>OPTIONAL</span>
              </div>

              <div className="full-terminal">
                {terminalOutput.map((line, index) => (
                  <div
                    key={`${line}-${index}`}
                    className={
                      line.startsWith("$")
                        ? "command-line"
                        : "output-line"
                    }
                  >
                    {line}
                  </div>
                ))}

                <form
                  className="terminal-input-line"
                  onSubmit={runCommand}
                >
                  <span>$</span>

                  <input
                    value={terminalInput}
                    onChange={(event) =>
                      setTerminalInput(event.target.value)
                    }
                    placeholder="type help..."
                    aria-label="Security Lab terminal"
                    autoComplete="off"
                  />
                </form>
              </div>
            </div>

            <div className="security-cards">
              <div className="security-card reveal">
                <span>STATUS</span>
                <strong>OPERATIONAL</strong>
                <p>
                  Portfolio systems are running normally.
                </p>
              </div>

              <div className="security-card reveal">
                <span>FOCUS</span>
                <strong>DEFENSIVE SECURITY</strong>
                <p>
                  Security tooling, monitoring, analysis,
                  and system understanding.
                </p>
              </div>

              <div className="security-card reveal">
                <span>PROJECTS</span>
                <strong>PYTHON</strong>
                <p>
                  Current security work is primarily
                  Python-based.
                </p>
              </div>

              <div className="security-card reveal">
                <span>SIMULATION</span>
                <strong>LOW</strong>
                <p>
                  This interface is a portfolio feature,
                  not a real security monitoring system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="section content-section"
        >
          <div className="section-heading reveal">
            <span>05</span>
            <h2>CONTACT</h2>
          </div>

          <div className="contact-panel reveal">
            <div>
              <div className="panel-label">OPEN CHANNEL</div>

              <h2>
                Let's build
                <br />
                something useful.
              </h2>

              <p>
                Interested in cybersecurity, software
                development, projects, internships, or
                technical collaboration? Reach out directly.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:duschith578@gmail.com">
                <span>EMAIL</span>
                <strong>duschith578@gmail.com</strong>
                <b>↗</b>
              </a>

              <a
                href="https://github.com/Zombie001-kaze"
                target="_blank"
                rel="noreferrer"
              >
                <span>GITHUB</span>
                <strong>Zombie001-kaze</strong>
                <b>↗</b>
              </a>

              <a
                href="https://www.linkedin.com/in/k-r-duschith-68993341b/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LINKEDIN</span>
                <strong>K R Duschith</strong>
                <b>↗</b>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 K R DUSCHITH</span>
        <span>SECURITY LAB / PORTFOLIO</span>
      </footer>
    </div>
  );
}

export default App;